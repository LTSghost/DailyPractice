const Input = {
    props: ["number","id","v-model"],
    template: `字串{{ number }}: <input :id=id v-model="v-model">`,
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
            alert(this.searchText)
        }
    },
    props: ["text"],
    template: `<div><button @click=mergeText()>{{ text }}</button></div>`
};

const app = Vue.createApp({
    components: {
        "component-input": Input,
        "component-button": Button
      },
}).mount('#app');