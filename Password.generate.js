let generat = require('generate-password');

let password = generat.generator({
	length: 10,
	numbers: true
});

console.log(password);



