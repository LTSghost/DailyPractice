const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");
const p4 = document.getElementById("p4");
const p5 = document.getElementById("p5");
const p6 = document.getElementById("p6");
const p7 = document.getElementById("p7");

const p8 = document.getElementById("p8");
const p9 = document.getElementById("p9");
const p10 = document.getElementById("p10");
const p11 = document.getElementById("p11");
const p12 = document.getElementById("p12");
const p13 = document.getElementById("p13");
const p14 = document.getElementById("p14");
const p15 = document.getElementById("p15");

// show time interval from now to chineseNewYear
function time() {
    var now = new Date();  // get current time
    var year = now.getFullYear();
    var chineseNewYear = new Date('January 22, 2023 00:00:00');
    var diffTime = chineseNewYear.getTime() - now.getTime(); // 現在到春節的時間差

    // 日
    var days = Math.floor(diffTime / (24*60*60*1000));
    var diffTime = diffTime - (days*24*60*60*1000);
    // 時
    var hours = Math.floor(diffTime / (60*60*1000));
    var diffTime = diffTime - (hours*60*60*1000);
    // 分
    var minutes = Math.floor(diffTime / (60*1000));
    var diffTime = diffTime - (minutes*60*1000);
    // 秒
    var seconds = Math.floor(diffTime / 1000);

    p1.innerText = "距";
    p2.innerText = year;
    p3.innerText = "年";
    p4.innerText = "春";
    p5.innerText = "節";
    p6.innerText = "還";
    p7.innerText = "有";

    p8.innerText = days;
    p9.innerText = "日";
    p10.innerText = hours;
    p11.innerText = "小時";
    p12.innerText = minutes;
    p13.innerText = "分";
    p14.innerText = seconds;
    p15.innerText = "秒";
}
setInterval(time, 1000);