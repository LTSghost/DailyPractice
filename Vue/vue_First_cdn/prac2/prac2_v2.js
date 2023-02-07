const app = Vue.createApp({
    data() {
        return {
            p: "檢核規則 <br>\
            1. 用戶名6-18個字符，可使用數字、字母、下劃線，需以字母開頭<br>\
            2. 密碼6-18個字符(字母和數字), 大小寫字母和數字必須都要有",
            fontBlue: {
                color: "blue"
            },
            fontRed:{
                color: "red"
            },
            label:{
                display: "inline-block",
                width: "70px",
                'text-align': "right"
            },
            legend: "註冊:",
            object: [
                { name:"帳號：", type:"text", variable:"",err:""},
                { name:"密碼：", type:"password", variable:"",err:""},
                { name:"Email：", type:"text", variable:"",err:""},
                { name:"手機：", type:"text", variable:"",err:""},
            ],
        }
    },
    methods: {
        validateForm(){
            account = this.object[0]['variable'];
            pwd = this.object[1]['variable'];
            email = this.object[2]['variable'];
            mobile = this.object[3]['variable'];

            this.accountCheck(account)
            this.passwordCheck(pwd)
            this.emailCheck(email)
            this.mobileCheck(mobile)
        },
        accountCheck(account){
            this.object[0]['err']
            re = /^[a-zA-Z][0-9_a-zA-Z]{1,17}$/;
            re = /^[a-zA-z][\w]{0,17}/
            
            if (account == "") {
                this.object[0]['err'] = "帳號不能為空"
                return 0
            }

            if ( re.test(account) == false) {
                this.object[0]['err'] = "只能包含數字,字母,下劃線且得字母開頭"
            } else if (account.length < 6 || account.length > 18) {
                this.object[0]['err'] = "長度應為6-18字符";
            } else {
                this.object[0]['err'] = "";
            }
        },
        passwordCheck(pwd){
            // re = /^[a-zA-Z0-9]{1,18}$/     
            re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9]+/
            if (pwd == "") {
                this.object[1]['err'] = "密碼不能為空"
                return 0
            }
            console.log("re=",re)
            console.log("pwd=",pwd)
            console.log(re.test(pwd))
            if ( re.test(pwd) == false ) {
                this.object[1]['err'] = "請輸入英文及數字組合"
            } else if (pwd.length < 6 || pwd.length > 18) {
                this.object[1]['err'] = "長度應為6-18字符";
            } else {
                this.object[1]['err'] = "";
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
                this.object[2]['err'] = "郵件不能為空"
                return 0
            }

            if ( email.match(re) == null ) {
                this.object[2]['err'] = "郵件格式錯誤";
            } else {
                this.object[2]['err'] = "";
            }
        },
        mobileCheck(mobile){
            re = /^09[0-9]{8}$/;    // e.g. 0900-000-000 Taiwan regular cell phone number first 09

            if (mobile == "") {
                this.object[3]['err'] = "號碼不能為空"
                return 0
            }

            if ( re.test(mobile) == false ) {
                this.object[3]['err'] ="號碼格式錯誤";
            } else {
                this.object[3]['err'] = "";
            }
        }
    },
}).mount("#app")