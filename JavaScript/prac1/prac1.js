const show = document.querySelector("show");

function bt1() {
    var text1 = document.querySelector("#text1").value;
    var text2 = document.getElementById("text2").value;    
    var show = document.getElementById("show");
    var textLen = 0;
    var sumText="";

    if (text1.length > text2.length) {
        textLen = text1.length;
    } else {
        textLen = text2.length;
    }
    for (let i = 0; i < textLen; i++) {
        if (text1[i]) {
            sumText += text1[i];
        }
        if (text2[i]) {
            sumText += text2[i];
        }
    }

    show.innerHTML = "合併結果 : " + sumText;
}