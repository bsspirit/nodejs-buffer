//////////////////////////////
// Buffer写入
//////////////////////////////

// 写入Buffer
var buf = new Buffer(64);

// 从开始写入Buffer，偏移0
var len1 = buf.write('从开始写入');
console.log(len1 + " bytes: " + buf.toString('utf8', 0, len1));

// 重新写入Buffer，偏移0
len1 = buf.write('重新写入');
console.log(len1 + " bytes: " + buf.toString('utf8', 0, len1));

// 继续写入Buffer，偏移len1
var len2 = buf.write('\u00bd + \u00bc = \u00be',len1);
console.log(len2 + " bytes: " + buf.toString('utf8', 0, len1+len2));

// 继续写入Buffer，偏移30
var len3 = buf.write('从第30位写入', 30);
console.log(len3 + " bytes: " + buf.toString('utf8', 0, 30+len3));

// Buffer总长度和数据
console.log(buf.length + " bytes: " + buf.toString('utf8', 0, buf.length));

// 继续写入Buffer，偏移30+len3
var len4 = buf.write('写入的数据长度超过Buffer的总长度！',30+len3);

// 超过Buffer空间的数据，没有被写入到Buffer中
console.log(buf.length + " bytes: " + buf.toString('utf8', 0, buf.length));


// Buffer复制 buf.copy
var buf1 = new Buffer(26);
var buf2 = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
    buf1[i] = i + 97; // 97 is ASCII a
    buf2[i] = 50; // ASCII is 2
}
buf1.copy(buf2, 5, 0, 10);
console.log(buf2.toString('ascii', 0, 25));


// Buffer填充 buf.fill
var buf = new Buffer(20);
buf.fill("h");
console.log(buf)
console.log("buf:"+buf.toString())

buf.fill();
console.log("buf:"+buf.toString())

//Buffer裁剪
var buf1 = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
    buf1[i] = i + 97;
}

// 从剪切buf1中的0-3的位置的字节，新生成的buf2是buf1的一个切片。
var buf2 = buf1.slice(0, 3);
console.log(buf2.toString('ascii', 0, buf2.length));

// 当修改buf1时，buf2同时也会发生改变
buf1[0] = 33;
console.log(buf2.toString('ascii', 0, buf2.length));
