// var span = document.getElementById('span');

var span2 = document.getElementById("span2");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");
var p4 = document.getElementById("p4");
var p5 = document.getElementById("p5");
var p6 = document.getElementById("p6");
var p7 = document.getElementById("p7");

var p8 = document.getElementById("p8");
var p9 = document.getElementById("p9");
var p10 = document.getElementById("p10");
var p11 = document.getElementById("p11");
var p12 = document.getElementById("p12");
var p13 = document.getElementById("p13");
var p14 = document.getElementById("p14");
var p15 = document.getElementById("p15");

function time() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth();
    var day = now.getDate();
    var hour = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();

    // span.innerHTML = "現在時間是" + year + "年" + 
    // (month+1) + "月" + 
    // day + "日" + 
    // hour + "時" + 
    // min + "分" +
    // sec + "秒";

    // span2.innerHTML = "距 " + year + " 年 " +  "春 節 " + "還 有 " +
    // (21-day) + "日" + 
    // (23-hour) + "時" + 
    // (59-min) + "分" +
    // (59-sec) + "秒" + "<br><br>";

    p2.innerHTML = year;
    p3.innerHTML = "年";
    p4.innerHTML = "春";
    p5.innerHTML = "節";
    p6.innerHTML = "還";
    p7.innerHTML = "有";

    p8.innerHTML = (21-day);
    p9.innerHTML = "日";
    p10.innerHTML = (23-hour);
    p11.innerHTML = "小時";
    p12.innerHTML = (59-min);
    p13.innerHTML = "分";
    p14.innerHTML = (59-sec);
    p15.innerHTML = "秒";
}

setInterval(time, 1000);

// var Today=new Date();
// document.write(
//     "現在時間是 " + Today.getFullYear()+ " 年 " + 
//     (Today.getMonth()+1) + " 月 " + 
//     Today.getDate() + " 日" +
//     Today.getHours() + " 時 " +
//     Today.getMinutes() + " 分 " +
//     Today.getSeconds() + " 秒 " +
//     "<br>" +
//     "距 " + Today.getFullYear() + " 年 春 節 還 有" + (21-Today.getDate()) + "天" +
//     (23-Today.getHours()) + "時" +
//     (59-Today.getMinutes()) + "分" +
//     (59-Today.getSeconds()) + "秒"
//     );