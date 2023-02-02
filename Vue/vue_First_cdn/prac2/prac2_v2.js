const app = Vue.createApp({
    // "form > p fieldset > legend > div,label,input,span"
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
            object: {
                account: ["用戶名：","text","acCheck","acSpan"],
                pwd: ["密碼：","password","pwdCheck","pwdSpan"],
                email: ["Email：","text","emailCheck","emailSpan"],
                mobile: ["手機號：","text","mobileCheck","mobileSpan"]
            },
            account: "LTS",
            pwd: "lts123",
            email: "DKLTSghost@gmail.com",
            mobile: 0989534292
        }
    },
    
}).mount("#app")