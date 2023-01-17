// click button to validate account, password, mail, number
function bt1() {
    var account = document.getElementById("account").value;
    var pw = document.getElementById("pw").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    var acCheck = document.getElementById("acCheck");
    var pwCheck = document.getElementById("pwCheck")
    var emailCheck = document.getElementById("emailCheck");
    var phoneCheck = document.getElementById("phoneCheck");

    accountCheck(account,acCheck)
    passwordCheck(pw,pwCheck)
    mailCheck(email,emailCheck)
    numberCheck(phone,phoneCheck)
}

function accountCheck(account,acCheck) {
    re = /^[a-zA-Z][0-9_a-zA-Z]{1,17}$/;
    re = /^[a-zA-z][\w]{0,17}/
    
    if ( re.test(account) == false) {
        acCheck.innerHTML = "只能包含數字,字母,下劃線且得字母開頭"
    } else if (account.length < 6 || account.length > 18) {
        acCheck.innerHTML = "長度應為6-18字符";
    } else {
        acCheck.innerHTML = "";
    }
}

function passwordCheck(pw,pwCheck) {
    re = /^[a-zA-Z0-9]{1,18}$/     

    if ( re.test(pw) == false ) {
        pwCheck.innerHTML = "請輸入英文及數字組合"
    } else if (pw.length < 6 || pw.length > 18) {
        pwCheck.innerHTML = "長度應為6-18字符";
    } else {
        pwCheck.innerHTML = "";
    }
}

function mailCheck(email,emailCheck) {
    re = /^[^\.](?!.*\.\.)[^@]+@[a-zA-Z0-9._]+[^\.]$/;   // dot 不能作為首尾字符, 不能連續 dot
       // ^[^\.] 字首不能 dot
       // (?!.*\.\.) 後面不能有 連續..
       // [^@]+ 多個任意不含 @ 位元
       // @[a-zA-Z0-9._]+  必須一個 @ 後面只能包含 (英文數字dot以及下劃線)
       // [^\.]$ 字尾不能 dot

       // case JohnnieCena.k.lll@gmail__132as.dff

    if ( email.match(re) == null ) {
        emailCheck.innerHTML = "郵件格式錯誤";
    } else {
        emailCheck.innerHTML = "";
    }
}

function numberCheck(phone,phoneCheck) {
    re = /^09[0-9]{8}/;    // e.g. 0900-000-000 Taiwan regular cell phone number first 09
    if ( re.test(phone) == false ) {
        phoneCheck.innerHTML="號碼格式錯誤";
    } else {
        phoneCheck.innerHTML = "";
    }
}