function bt1() {
    var account = document.getElementById("account").value;
    var pw = document.getElementById("pw").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    var acCheck = document.getElementById("acCheck");
    var pwCheck = document.getElementById("pwCheck")
    var emailCheck = document.getElementById("emailCheck");
    var phoneCheck = document.getElementById("phoneCheck");

    
    var re = /^[a-zA-Z][0-9_a-zA-Z]+$/



    re = /^[a-zA-Z].+/;        // 字首英文  後面隨意

    
    accountCheck(account,acCheck)
    passwordCheck(pw,pwCheck)
    mailCheck(email,emailCheck)
    numberCheck(phone,phoneCheck)
}

function accountCheck(account,acCheck) {
    re = /^[a-zA-Z][0-9_a-zA-Z]{1,17}$/;
    
    if ( re.test(account) == false) {
        acCheck.innerHTML = "只能包含數字,字母,下劃線且得字母開頭"
    } else if (account.length < 6 || account.length > 18) {
        acCheck.innerHTML = "長度應為6-18字符";
    } else {
        acCheck.innerHTML = "";
    }
}

function passwordCheck() {
    re = /^[a-zA-Z0-9]{1,18}$/

    if ( re.test(pw) == false ) {
        pwCheck.innerHTML = "請輸入英文及數字組合"
    } else if (pw.length < 6 || pw.length > 18) {
        pwCheck.innerHTML = "長度應為6-18字符";
    } else {
        pwCheck.innerHTML = "";
    }
}

function mailCheck(email) {
    re = /.+@.+\..+/;    // aa@bb.cc

    if ( re.test(email) == false ) {
        emailCheck.innerHTML = "郵件格式錯誤";
    } else {
        emailCheck.innerHTML = "";
    }
}

function numberCheck(phone,phoneCheck) {
    re = /[0-9]{10}/;    // 10碼
    if ( re.test(phone) == false ) {
        phoneCheck.innerHTML="號碼格式錯誤";
    } else {
        phoneCheck.innerHTML = "";
    }
}