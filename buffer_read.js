//////////////////////////////
// Buffer 读取
//////////////////////////////

var buf = new Buffer(10);
for (var i = 0 ; i < 10 ; i++) {
    buf[i] = i + 97;
}
console.log(buf.length + " bytes: " + buf.toString('utf-8'));

for (ii = 0; ii < buf.length; ii++) {
    var ch = buf.readUInt8(ii);
    console.log(ch + ":"+ String.fromCharCode(ch));
}

//写入中文数据
var buf = new Buffer(10);
buf.write('abcd')
buf.write('数据',4)
for (var i = 0; i < buf.length; i++) {
    console.log(buf.readUInt8(i));
}

//toString函数
console.log("buffer :"+buf);
console.log("utf-8  :"+buf.toString('utf-8'));
console.log("ascii  :"+buf.toString('ascii'));
console.log("hex    :"+buf.toString('hex'));

// toJSON函数
var buf = new Buffer('test');
console.log(buf.toJSON());


