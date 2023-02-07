const Form = {
    // props:["formInput1","formInput2","formInput3","formInput4","acErr"],
    props:{
        formInput1:String,
        formInput2:String,
        formInput3:String,
        formInput4:String,
        acErr:String,
    },
    template:
    `
    <form @submit.prevent="validateForm()" action="">
        <p v-html="formP" :style="fontBlue"></p>
        <fieldset>
            <legend v-text="legend"></legend>
                <div v-for="(value,key,index) in object">
                    <label :style="label">{{ value[0] }}</label>
                    <input 
                    :type=value[1] 
                    :name=key
                    :value=value[2]
                    @input="$emit(value[3] , $event.target.value)" >
                    <span :style="fontRed" :id=value[4] v-text=value[5]></span>
                </div>
                <slot></slot>
                內部account : {{ formInput1 }}
        </fieldset>
    </form>
    `,
    data() {
        return {
            formP: "檢核規則 <br>\
            1. 用戶名6-18個字符，可使用數字、字母、下劃線，需以字母開頭<br>\
            2. 密碼6-18個字符(字母和數字), 大小寫字母和數字必須都要有",
            legend:"註冊:"
            ,
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
            object: {
                account: ["帳號：","text",this.formInput1,'update:formInput1',"acCheck",this.acErr],
                pwd: ["密碼：","password",this.formInput2,"update:formInput2","pwdCheck","pwdErr"],
                email: ["Email：","text",this.formInput3,"update:formInput3","emailCheck","emailErr"],
                mobile: ["手機：","text",this.formInput4,"update:formInput4","mobileCheck","mobileErr"]
            },
            object1: [{
                    account:this.formInput1
                
            }],
            // item:[this.formInput1,this.formInput2,this.formInput3,this.formInput4]
        }
    },
    methods: {
        validateForm(){
            console.log()
            // this.accountCheck(this.formInput1)
            // this.passwordCheck(this.formInput2)
            // this.emailCheck(this.formInput3)
            // this.mobileCheck(this.formInput4)
        },
        accountCheck(account){
            re = /^[a-zA-Z][0-9_a-zA-Z]{1,17}$/;
            re = /^[a-zA-z][\w]{0,17}/

            // if (account == "") {
            //     this.acErr = "帳號不能為空"
            //     return 0
            // }

            // if ( re.test(account) == false) {
            //     this.acErr = "只能包含數字,字母,下劃線且得字母開頭"
            // } else if (account.length < 6 || account.length > 18) {
            //     this.acErr = "長度應為6-18字符";
            // } else {
            //     this.acErr = "";
            // }
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
}

const app = Vue.createApp({
    data() {
        return {
            account:"LTS",
            pwd:"lts123",
            email:"DKLTSghost@gmail.com",
            mobile:"0989534292"
        }
    },
    components:{
        "customized-form":Form
    }
}).mount("#app")