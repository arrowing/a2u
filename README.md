##  ANSI TO UNICODE
Convert ansi buffer to character(ucs2 encodings), or convert character to ansi encodings in NodeJs.

## Usage
### Decode API
```javascript
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
```

### Encode API
```javascript
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
```
