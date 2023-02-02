const app = Vue.createApp({
    data() {
        return {
            p: "檢核規則 <br>\
            1. 用戶名6-18個字符，可使用數字、字母、下劃線，需以字母開頭<br>\
            2. 密碼6-18個字符(字母和數字), 大小寫字母和數字必須都要有",
            fontBlue: {
                color: "blue"
            },
            error:{
                color: "red"
            },
            label:{
                display: "inline-block",
                width: "70px",
                'text-align': "right"
            },
            legend: "註冊:",
            account: "LTS",
            pwd: "lts12",
            email: "DKLTSghost@@gmail.com",
            mobile: "09895342920",
            acErr: "",
            pwdErr: "",
            emailErr: "",
            mobileErr: ""
        }
    },
    methods: {
        validateForm(){
            this.accountCheck(this.account)
            this.passwordCheck(this.pwd)
            this.emailCheck(this.email)
            this.mobileCheck(this.mobile)
        },
        accountCheck(account){
            re = /^[a-zA-Z][0-9_a-zA-Z]{1,17}$/;
            re = /^[a-zA-z][\w]{0,17}/
            
            if (account == "") {
                this.acErr = "帳號不能為空"
                return 0
            }

            if ( re.test(account) == false) {
                this.acErr = "只能包含數字,字母,下劃線且得字母開頭"
            } else if (account.length < 6 || account.length > 18) {
                this.acErr = "長度應為6-18字符";
            } else {
                this.acErr = "";
            }
        },
        passwordCheck(pwd){
            re = /^[a-zA-Z0-9]{1,18}$/     

            if (pwd == "") {
                this.pwdErr = "密碼不能為空"
                return 0
            }

            if ( re.test(pwd) == false ) {
                this.pwdErr = "請輸入英文及數字組合"
            } else if (pwd.length < 6 || pwd.length > 18) {
                this.pwdErr = "長度應為6-18字符";
            } else {
                this.pwdErr = "";
            }
        },
        emailCheck(email){
            re = /^[^\.](?!.*\.\.)[^@]+@[a-zA-Z0-9._]+[^\.]$/;   // dot 不能作為首尾字符, 不能連續 dot
            // ^[^\.] 字首不能 dot
            // (?!.*\.\.) 後面不能有 連續..
            // [^@]+ 多個任意不含 @ 位元
            // @[a-zA-Z0-9._]+  必須一個 @ 後面只能包含 (英文數字dot以及下劃線)
            // [^\.]$ 字尾不能 dot
     
            // case JohnnieCena.k.lll@gmail__132as.dff
     
            if (email == "") {
                this.emailErr = "郵件不能為空"
                return 0
            }

            if ( email.match(re) == null ) {
                this.emailErr = "郵件格式錯誤";
            } else {
                this.emailErr = "";
            }
        },
        mobileCheck(mobile){
            re = /^09[0-9]{8}$/;    // e.g. 0900-000-000 Taiwan regular cell phone number first 09

            if (mobile == "") {
                this.mobileErr = "號碼不能為空"
                return 0
            }

            if ( re.test(mobile) == false ) {
                this.mobileErr ="號碼格式錯誤";
            } else {
                this.mobileErr = "";
            }
        }
    },
    computed: {
        // validateForm(){
        //     console.log("hello")
        //     // accountCheck(this.account,this.acErr)
        //     // passwordCheck(pw,pwCheck)
        //     // mailCheck(email,emailCheck)
        //     // numberCheck(phone,phoneCheck)
        // }
    },
}).mount("#app")