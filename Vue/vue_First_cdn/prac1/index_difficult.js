const Input = {
    props: ["number","id","modelValue","parentMsg1"],
    template: 
    `
    <!-- :modelValue=modVal @update:modelValue="modVal = $event" -->
    字串{{ number }}: <input :id=id :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
    <div> 從 props 來的 parentMsg1 ==> {{ parentMsg1 }} </div>
    <div> 自己的 msg ==> {{ msg }} </div>
    `,
    data() {
        return {
            msg: '這是子元件的 msg'
        }
    },
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
            input4: "123456",
            input1: "abcd",
            input2: "12345",
            msg: '這是外層元件的 msg'
        }
    },
    computed: {
        test: ({ input3, input4}) => "使用Computed 計算後:" + this.input3 + this.input4
        // [...input3].map((c,i) => c + (this.input4[i] || "")).join("") + input4.slice(input3.length)
        ,
        test1() {
            return this.input1 + this.input2
        }
    },
    components: {
        "component-input": Input,
        "component-button": Button
      }
}).mount('#app');