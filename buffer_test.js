
//////////////////////////////////
// 测试一：8K的创建测试
//////////////////////////////////
var num = 100*1000;
console.time("test1");
for(var i=0;i<num;i++){
    new Buffer(1024*4);
}
console.timeEnd("test1");

console.time("test2");
for(var j=0;j<num;j++){
    new Buffer(1024*4+1);
}
console.timeEnd("test2");

//////////////////////////////////
// 测试二：多Buffer VS 单Buffer
//////////////////////////////////
var max = 2048;
var time = 10*1000;

function getString(size){
    var ret = ""
    for(var i=0;i<size;i++) ret += "a";
    return ret;
}

var arr1=[];
for(var i=0;i<time;i++){
    var size = Math.ceil(Math.random()*max)
    arr1.push(getString(size));
}
//console.log(arr1);

console.time('test3');
var arr_3 = [];
for(var i=0;i<time;i++){
    arr_3.push(new Buffer(arr1[i]));
}
console.timeEnd('test3');

console.time('test4');
var buf = new Buffer(time*max);
var offset=0;
var arr_4=[];
for(var i=0;i<time;i++){
    arr_4[i]=offset;
    buf.write(arr1[i],offset,arr1[i].length);
    offset=offset+arr1[i].length;
}
console.timeEnd('test4');
//console.log(arr_4);
//console.log(buf.toString());

console.log("src:[2]  ="+arr1[2]);
console.log("test3:[2]="+arr_3[2].toString());
console.log("test4:[2]="+buf.toString('utf-8',arr_4[2],arr_4[3]));

//////////////////////////////////
//测试三，Buffer VS string
//////////////////////////////////
var time = 300*1000;
var txt = "aaa"

var str = "";
console.time('test5')
for(var i=0;i<time;i++){
    str += txt;
}
console.timeEnd('test5')
//console.log(str);

console.time('test6')
var buf = new Buffer(time * txt.length)
var offset = 0;
for(var i=0;i<time;i++){
    var end = offset + txt.length;
    buf.write(txt,offset,end);
    offset=end;
}
console.timeEnd('test6')
//console.log(buf.toString());




