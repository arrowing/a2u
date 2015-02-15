var fs = require('fs');
var buf = fs.readFileSync('demo.txt'); //txt's encoding is ANSI, the content is "I(我) love(爱) you(你)."
var a2u = require('a2u');
var str, newBuf;

// Convert from an encoded buffer to js string.
str = a2u.decode(buf);
console.log(str);//I(我) love(爱) you(你).

// If you want convert to buffer with ucs2 encoding, the second arg for method(decode) will be true.
newBuf = a2u.decode(buf, true);

console.log('ANSI buffer : ', buf);
console.log('ucs2 buffer : ', newBuf);
console.log(newBuf.toString('ucs2'));//I(我) love(爱) you(你).