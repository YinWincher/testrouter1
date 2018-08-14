
/**
 * 将时间戳转化为yy-mm-dd hh:mm:ss形式
 * @param time
 * @returns {string}
 */
export function transformDate(time) {
	const date = new Date(time);
	return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
