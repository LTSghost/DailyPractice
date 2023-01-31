$(function(){
    allText = "距y年春節還有d日h小時m分s秒"

    $("div#app").addClass("time");

    var table = $('<table>');
    var row1 = $('<tr>');
    var row2 = $('<tr>');

    // add column in upperlayer <tr> row1
    for (let i = 0; i < allText.length; i++) {
        var word = allText[i];
        if (word == "d") break;
        $col = $("<td>" + word + "</td>");
        if (word == "y") {
            $col.addClass("year");
        }
        row1.append($col)
    }
    // table add upperlayer <tr> row1
    table.append(row1);

    // add column in lowerlayer <tr> row2
    for (let i = allText.indexOf("d"); i < allText.length; i++) {
        var word = allText[i];
        $col = $("<td>" + word + "</td>");
        if (word == "d") {
            $col.addClass("days");
        }
        if (word == "h") {
            $col.addClass("hours");
        }
        if (word == "m") {
            $col.addClass("minutes");
        }
        if (word == "s") {
            $col.addClass("seconds");
        }
        row2.append($col)
    }
    // table append lowerlayer <tr> row2
    table.append(row2);

    $('div#app').append(table);

    time()
})

// show time interval from now to lunarNewYear
function time() {
    var now = new Date();  // get current time
    // year = now.getFullYear();
    var lunarNewYear = new Date('February 10, 2024 00:00:00');
    year = lunarNewYear.getFullYear();
    var diffTime = lunarNewYear.getTime() - now.getTime(); // 現在到春節的時間差

    // 日
    var days = Math.floor(diffTime / (24*60*60*1000));
    var diffTime = diffTime - (days*24*60*60*1000);
    days = supplementZero(days)
    // 時
    var hours = Math.floor(diffTime / (60*60*1000));
    var diffTime = diffTime - (hours*60*60*1000);
    hours = supplementZero(hours)
    // 分
    var minutes = Math.floor(diffTime / (60*1000));
    var diffTime = diffTime - (minutes*60*1000);
    minutes = supplementZero(minutes)
    // 秒
    var seconds = Math.floor(diffTime / 1000);
    seconds = supplementZero(seconds)

    $(".year").text(year);
    $(".days").text(days);
    $(".hours").text(hours);
    $(".minutes").text(minutes);
    $(".seconds").text(seconds);
}
setInterval(time, 1000);

function supplementZero(time) {
    // return time / 10 < 1 ? "0"+time : time;
    return time < 10 ? "0" + time : time;
}