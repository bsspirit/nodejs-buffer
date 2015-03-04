// 长度为0的Buffer实例
var a = new Buffer(0);
console.log(a);

// 长度为0的Buffer，引用是一样的
var a2 = new Buffer(0);
console.log(a2);

// 长度为10的Buffer实例
var a10 = new Buffer(10);
console.log(a10);

// 数组
var b = new Buffer(['a','b',12])
console.log(b);

// 字符编码
var b2 = new Buffer('你好','utf-8');
console.log(b2);

// 检查支持编码
console.log(Buffer.isEncoding('utf-8'))
console.log(Buffer.isEncoding('binary'))
console.log(Buffer.isEncoding('ascii'))
console.log(Buffer.isEncoding('ucs2'))
console.log(Buffer.isEncoding('hex'))
console.log(Buffer.isEncoding('base64'))
console.log(Buffer.isEncoding('gbk'))
console.log(Buffer.isEncoding('gb2312'))

// 检查Buffer
console.log(Buffer.isBuffer(new Buffer('a')))
console.log(Buffer.isBuffer('adfd'))
console.log(Buffer.isBuffer('\u00bd\u00bd'))

// 字符串的字节长度判断
var str = 'abcd';
console.log(str + ": " + str.length + " characters, " + Buffer.byteLength(str, 'utf8') + " bytes");
console.log(str + ": " + str.length + " characters, " + Buffer.byteLength(str, 'ascii') + " bytes");

var str2 = '粉丝日志';
console.log(str2 + ": " + str2.length + " characters, " + Buffer.byteLength(str2, 'utf8') + " bytes");
console.log(str2 + ": " + str2.length + " characters, " + Buffer.byteLength(str2, 'ascii') + " bytes");

// Buffer连接
var b1 = new Buffer("abcd");
var b2 = new Buffer("1234");
var b3 = Buffer.concat([b1,b2],8);
console.log(b3.toString());

var b4 = Buffer.concat([b1,b2],32);
console.log(b4.toString());
console.log(b4.toString('hex'));

var b5 = Buffer.concat([b1,b2],4);
console.log(b5.toString());

//Buffer的比较，用于Buffer的内容排序
var a1 = new Buffer('10');
var a2 = new Buffer('50');
var a3 = new Buffer('123');
console.log(Buffer.compare(a1,a2));
console.log(Buffer.compare(a2,a3));
console.log([a1,a2,a3].sort(Buffer.compare));
console.log([a1,a2,a3].sort(Buffer.compare).toString());

