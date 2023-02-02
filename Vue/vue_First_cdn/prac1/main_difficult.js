const Input = {
    props: ["number","id"],
    template: `字串{{ number }}: <input :id=id>`,
  };

const Button = {
    data() {
        return {
            input1:"ddd",
            input2:"",
            msg: "",
        }
    },
    methods: {
        mergeText() {
            alert(this.input1)
        }
    },
    props: ["text"],
    template: `<div><button @click=mergeText()>{{ text }}</button></div>`
};

const app = Vue.createApp({
    data() {
        return {
            input3: "abcd",
            input4: "123456"
        }
    },
    computed: {
        test: ({ input3, input4}) => "使用Computed 計算後:" + this.input3 + this.input4
        // [...input3].map((c,i) => c + (this.input4[i] || "")).join("") + input4.slice(input3.length)
        ,
        test1() {
            return this.input3 + this.input4
        }
    },
    components: {
        "component-input": Input,
        "component-button": Button
      }
}).mount('#app');