import axios from 'axios'
import obj2query from './obj2query'

class AJAX {
	constructor(cfg) {
		/**
		 * 成功标志 key
		 * @type {Sring}
		 */
		this.reqSuccessKey = cfg.reqSuccessKey
		/**
		 * 成功标志 value
		 * 一般为 code
		 * @type {Array}
		 */
		this.reqSuccessValue = cfg.reqSuccessValue || []

		/**
		 * 请求失败处理函数
		 * 不命中 reqSuccessValue 时进行处理
		 * @type {Function}
		 * @param  {Object} res 当前请求的返回
		 */
		this.resFailHandler = cfg.resFailHandler || ((res) => {
			return Promise.reject(res)
		})

		/**
		 * 错误拦截 code
		 * @type {Array}
		 */
		this.resErrorValue = cfg.resErrorValue || []

		/**
		 * 错误拦截处理函数
		 * 命中 resErrorValue 时进行处理
		 * @type {Function}
		 * @param  {Object} $ajax 当前ajax实例 this
		 */
		this.resErrorHandler = cfg.resErrorHandler || (() => {})

		/**
		 * headers 配置
		 * @type {Object}
		 */
		this.headers = cfg.headers || {}

		/**
		 * axios 实例
		 * @type {Object}
		 */
		this.instance = axios.create({
			baseURL: cfg.baseUrl,
			timeout: cfg.timeout || 30000
		})

		/**
		 * 配置请求拦截
		 */
		this.initInterceptors()
	}

	/**
	 * ajax内部函数 get 方法
	 * @param  {String} url    相对路径接口地址
	 * @param  {Object} params 参数
	 * @return [XHR, Error]        请求返回值/错误
	 */
	get(url, params) {
		return this.fetch(url + obj2query(params))
	}

	/**
	 * ajax内部函数 post 方法
	 * @param  {String} url    相对路径接口地址
	 * @param  {Object} params 参数
	 * @return [XHR, Error]        请求返回值/错误
	 */
	post(url, params) {
		return this.fetch(url, params)
	}

	/**
	 * ajax内部函数 实际发起请求的方法
	 * @param  {String} url    相对路径接口地址
	 * @param  {Object} params 参数
	 * @return [XHR, Error]        请求返回值/错误
	 */
	fetch(url, params) {
		let instance = params ? this.instance.post(url, params) : this.instance.get(url)

		return instance.then((res) => {
			let code = res && res[this.reqSuccessKey]
			if (code) {
				code = parseInt(code)
			}
			if (this.reqSuccessValue.indexOf(code) > -1) {
				return Promise.resolve(res)
			} else {
				return this.resFailHandler(res)
			}
		}).catch((error) => {
			return this.resFailHandler(error)
		})
	}

	/**
	 * request 拦截
	 * @param  {Object} config 该次请求的 config
	 * @return {Object} config 更新后的 config
	 */
	reqInterceptor(config) {
		this.setHeaders()
		return config
	}

	/**
	 * response 拦截
	 * @param  {XHR} xhr 请求返回的内容
	 * @return [XHR, Error]     请求返回值/错误
	 */
	resInterceptor(xhr) {
		let res = xhr && xhr.data
		let code = res && res[this.reqSuccessKey]
		if (code) {
			code = parseInt(code)
		}
		if (this.resErrorValue.indexOf(code) > -1) { // 是否命中需要处理的错误代码
			return this.resErrorHandler(this)
		} else { // 否则返回请求结果
			return res
		}
	}

	initInterceptors() {
		// request 拦截
		this.instance.interceptors.request.use((config) => {
			return this.reqInterceptor(config)
		}, (error) => {
			return this.resFailHandler(error)
		})

		// response 拦截
		this.instance.interceptors.response.use((xhr) => {
			return this.resInterceptor(xhr)
		}, (error) => {
			return this.resFailHandler(error)
		})
	}

	/**
	 * 设置 ajax 实例全局请求头
	 */
	setHeaders(headers = {}) {
		this.headers = Object.assign({}, this.headers, headers)
		this.instance.defaults.headers = Object.assign({}, this.instance.defaults.headers, this.headers)
	}
}

export default AJAX
