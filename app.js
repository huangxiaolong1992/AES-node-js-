'use strict';
const crypto = require('crypto');

//解密

let decrypt=(data)=>{

    var key = '46cc793c53dc4511';   //长度取决于aes的类型

    let decipher = crypto.createDecipheriv('aes-128-ecb', key,"");

    const buf1 = new Buffer(data,"base64").toString('hex');

    let decrypted = decipher.update(buf1, 'hex', 'utf8');

    decrypted += decipher.final('utf8');

    return decrypted;

  };



console.log( decrypt("6RJhDqqcXtghRvwUFi6VRA==") );



//加密

let Encrypt=(dataStr, key, iv) =>{
	let cipherChunks = [];
	var key = '46cc793c53dc4511';
	let cipher = crypto.createCipheriv('aes-128-ecb', key, "");
	cipher.setAutoPadding(true);
	cipherChunks.push(cipher.update(dataStr, 'utf8', 'base64'));
	cipherChunks.push(cipher.final('base64'));
	return cipherChunks.join('');
}

console.log( Encrypt("哈哈") ); 

 
