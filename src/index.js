module.exports = function reverse (n) {
	
		let strNum = n.toString();

		if(strNum[0] === '-'){
			return strNum.slice(1).split('').reverse().join('');
	
		}

	    return  strNum.toString().split('').reverse().join('');
	
  
}
