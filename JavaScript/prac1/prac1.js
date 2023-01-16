// text1 and text2 criss-cross; first text1
function bt1() {
    var text1 = document.querySelector("#text1").value;
    var text2 = document.getElementById("text2").value;
    var show = document.getElementById("show");
    var textMaxLen = 0;
    var sumText="";

    // 比較字串最長長度
    textMaxLen = Math.max(text1.length, text2.length);

    for (let i = 0; i < textMaxLen; i++) {
        if (text1[i]) {
            sumText += text1[i];
        }
        if (text2[i]) {
            sumText += text2[i];
        }
    }

    show.innerHTML = "合併結果 : " + sumText;
}