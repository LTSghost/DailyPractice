const app = Vue.createApp({
    data() {
        return {
            msg: "",
            input1: "abcd",
            input2: "12345"
        }
    },
    methods: {
        bt1(){
            input1 = this.input1
            input2 = this.input2
            sumText = ""
            // 比較字串最長長度
            textMaxLen = Math.max(input1.length, input2.length);

            for (let i = 0; i < textMaxLen; i++) {
                if (input1[i]) {
                    sumText += input1[i];
                }
                if (input2[i]) {
                    sumText += input2[i];
                }
            }

            this.msg = "合併結果 : " + sumText;
        },
        reverseMethods() {
            input1 = this.input1
            input2 = this.input2
            sumText = ""
            // 比較字串最長長度
            textMaxLen = Math.max(input1.length, input2.length);

            for (let i = 0; i < textMaxLen; i++) {
                if (input1[i]) {
                    sumText += input1[i];
                }
                if (input2[i]) {
                    sumText += input2[i];
                }
            }

            return " 使用 methods 計算後反轉字串 : " + sumText;
        }
    },
    computed: {
        reverseComputed() {
            input1 = this.input1
            input2 = this.input2
            sumText = ""
            // 比較字串最長長度
            textMaxLen = Math.max(input1.length, input2.length);

            for (let i = 0; i < textMaxLen; i++) {
                if (input1[i]) {
                    sumText += input1[i];
                }
                if (input2[i]) {
                    sumText += input2[i];
                }
            }

            return "使用 Computed 計算後反轉字串 : " + sumText;
        }
    }
}).mount('#app');