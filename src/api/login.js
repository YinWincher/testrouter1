import Ajax from './ajax';

const eucApi = new Ajax({
	baseUrl: '/euc-admin-web',
	reqSuccessKey: 'code',
	reqSuccessValue: [100],
	msgKey: 'message',
	// interceptError: redirectToLogin
})

export const login = (params) => eucApi.post('/user/login.do',{...params})
