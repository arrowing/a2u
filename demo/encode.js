var fs = require('fs');
var a2u = require('a2u');
var str = "I(我) love(爱) you(你).";
var buf;

// If string
buf = a2u.encode(str);
console.log('ANSI buffer : ', buf);

// If buffer
buf = a2u.encode( new Buffer(str, 'ucs2') );
console.log('ANSI buffer : ', buf);

// Write to file
fs.writeFileSync('ansi.txt', buf);