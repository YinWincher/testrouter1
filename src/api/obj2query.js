const obj2query = (params)=>{
	if(typeof params !== 'Object'){
		return '';
	}
	const keys = Object.keys(params);
	return keys.map((val)=>{
		return `${val}=${params[val]}`
	}).join('&');
}

export default obj2query;
