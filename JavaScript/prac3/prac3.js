// var FirstEN = "ABCDEFGHJKLMNPQRSTUVXYWZIO";

// var account = document.getElementById("account").value;

// function myAccount() {
//     var account = document.getElementById("account").value;
//     var acCheck = document.getElementById("acCheck");

//     var re = /^[a-zA-Z][0-9_a-zA-Z]+/;

//     reRes = re.test(account)

//     if (account.length < 6 || account.length > 18) {
//         acCheck.innerHTML = "請輸入6-18字元";
//         document.getElementById("account").value = "";
//         document.getElementById("account").focus();
//         return 0;
//     } else { 
//         acCheck.innerHTML = "";
//     }

//     for (let i = 0; i < 26; i++){
//         if (FirstEN.indexOf(account.charAt(0).toUpperCase()) == -1){
//             acCheck.innerHTML=("第一個字元必須是英文");
//             document.getElementById("account").value = "";
//             document.getElementById("account").focus();
//         } else { 
//             acCheck.innerHTML = ""; 
//         }
//     }

//     if ( reRes ) {
//         acCheck.innerHTML = "";
//     } else { 
//         acCheck.innerHTML = "只能使用數字,字母,下劃線";
//         document.getElementById("account").value = "";
//         document.getElementById("account").focus(); 
//     }
// }

// function myPwd() {
//     var pw = document.getElementById("pw").value;
//     var pwCheck = document.getElementById("pwCheck");

//     var re = /[a-zA-Z0-9]+/g

//     if (pw.length < 6 || pw.length > 18) {
//         pwCheck.innerHTML = "請輸入6-18字元";
//         document.getElementById("pw").value = "";
//         document.getElementById("pw").focus();
//         return 0;
//     } else { 
//         pwCheck.innerHTML = "";
//     }
// }

// function myphone() {
//     var re = /[0-9]{10}/
// }

function bt1() {
    var account = document.getElementById("account").value;
    var acCheck = document.getElementById("acCheck");
    // var re = /^[a-zA-Z][0-9_a-zA-Z]{1,17}$/
    var re = /^[a-zA-Z][0-9_a-zA-Z]+$/

    // if (account.length < 6 || account.length > 18) {
    //     testAccount = 1;
    //     acCheck.innerHTML = "長度應為6-18字符";
        // document.getElementById("account").value = "";

        re = /^[a-zA-Z].+/;        // 字首英文  後面隨意
        
    //     var pass1 = true;
    // } else {
    //     acCheck.innerHTML ="";
    // }
    // if ( pass1 == true ){

    // } else {
    //     if ( re.test(account) == false ) { 
    //         acCheck.innerHTML = "必須字母開頭"
        
    //         re = /^[a-zA-Z][0-9_a-zA-Z]+$/;
    //         var pass2 = true;
    //     } else {
    //         acCheck.innerHTML ="";
    //     }
    // }

    // if ( pass2 = true) {

    // } else {
    //     if ( re.test(account) == false ) {
    //         acCheck.innerHTML = "只能包含數字, 字母, 下劃線"
    //     } else {
    //         acCheck.innerHTML = ""
    //     }
    // }

    // if ( re.test(account) == false ) { 
    //     acCheck.innerHTML = "必須字母開頭"
    //     re = /^[a-zA-Z][0-9_a-zA-Z]+$/;
    // }
    // if ( re.test(account) == false ) {
    //     acCheck.innerHTML = "只能包含數字, 字母, 下劃線"
    // }


    // ----------------account check
    re = /^[a-zA-Z][0-9_a-zA-Z]{1,17}$/;

    if ( re.test(account) == false) {
        acCheck.innerHTML = "只能包含數字,字母,下劃線且得字母開頭"
    } else if (account.length < 6 || account.length > 18) {
        acCheck.innerHTML = "長度應為6-18字符";
    } else {
        acCheck.innerHTML = "";
    }

    // ----------------password check
    re = /^[a-zA-Z0-9]{1,18}$/
    var pw = document.getElementById("pw").value;
    var a = 0;

    if ( re.test(pw) == false ) {
        pwCheck.innerHTML = "請輸入英文及數字組合"
    } else if (pw.length < 6 || pw.length > 18) {
        pwCheck.innerHTML = "長度應為6-18字符";
    } else {
        pwCheck.innerHTML = "";
    }
    
    // ----------------email check
    var email = document.getElementById("email").value;
    emailCheck = document.getElementById("emailCheck");

    re = /.+@.+\..+/;    // aa@bb.cc
    if ( re.test(email) == false ) {
        emailCheck.innerHTML = "郵件格式錯誤";
    } else {
        emailCheck.innerHTML = "";
    }

    //-----------------phone check
    var phone = document.getElementById("phone").value;
    var phoneCheck = document.getElementById("phoneCheck");

    re = /[0-9]{10}/;    // 10碼
    if ( re.test(phone) == false ) {
        phoneCheck.innerHTML="號碼格式錯誤";
    } else {
        phoneCheck.innerHTML = "";
    }

}