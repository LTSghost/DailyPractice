//-----------------------------------version 1
/*
// const { createApp, ref } = Vue;

// const vm = createApp({
//     setup () {
//         const message = ref('Hello Vue 3.0!');
//         const price = ref(100);
//         const count = ref(8);
//         return {
//             message,
//             price,
//             count
//         }
//     }
// })

// vm.mount('#app');
*/

//-----------------------------------version 2
/*
// const { createApp } = Vue;

// createApp({
//     // 實體所回傳的狀態會以物件 key-value 的形式
//     // 且在 Vue 3.0 開始，data 將強制以 function 的形式出現
//     data () {
//         return {
//             message: 'Hello Vue 3.0!',
//             price : 100,
//             count : 8
//         }
//     }
// }).mount('#app');
*/

//-----------------------------------version 3
const vm = Vue.createApp({
    template: `
        {{ message }} 豪棒棒
        <br>
        雞腿便當 : {{ price }}
        <br>
        數量 : {{ quantity }}
        <br>
        <br>
        總額1 : {{ priceTotalMethods(1) }}
        <br>
        總額2 : {{ priceTotalMethods(1) }}
        <br>
        總額3 : {{ priceTotalMethods(1) }}
        <br>
        <br>
        總額4 : {{ priceTotalComputed }}
        <br>
        總額5 : {{ priceTotalComputed }}
        <br>
        總額6 : {{ priceTotalComputed }}
        <br>
        <br>
        <!-- <p>1 日幣 = 0.23 台幣</p>
        <div>台幣 <input type="text" v-model="twd" v-on:input="twd2jpy"></div>
        <div>日幣 <input type="text" v-model="jpy" v-on:input="jpy2twd"></div> -->

        <p>1 日幣 = 0.23台幣 ; 1美元 = 30.28台幣</p>
        <div>台幣 <input type="text" v-model="twd"></div>
        <div>日幣 <input type="text" v-model="jpy"></div>
        <div>美元 <input type="text" v-model="usd"></div>
        `,
    data () {
        return {
            greeting: '您好阿', 
            message: 'Hello Vue 3.0!',
            price : 100,
            quantity : 8,
            twd : 1
        }
    },
    computed: {
        priceTotalComputed () {
            console.log('computed');
            return this.price * this.quantity;
        },
        jpy: {
            get() {
                return Number.parseFloat(Number(this.twd) / 0.23).toFixed(3);
            },
            set(val) {
                return Number.parseFloat(Number(val) * 0.23).toFixed(3);
            }
        },
        usd: {
            get() {
                return Number.parseFloat(Number(this.twd) * 30.28).toFixed(3);
            },
            set(val) {
                return Number.parseFloat(Number(val) / 30.28).toFixed(3);
            }
        }
    },
    methods: {
        // priceTotal : function () {
        //     return this.price * this.quantity
        // }

        priceTotalMethods (add) {
            console.log('methods');
            return this.price * this.quantity + add;
        }

        // twd2jpy () {
        //     this.jpy = Number.parseFloat(Number(this.twd) / 0.23).toFixed(3);
        // },
        // jpy2twd () {
        //     this.twd = Number.parseFloat(Number(this.jpy) * 0.23).toFixed(3);
        // }
    }
}).mount('#app');

vm.$data.price = 90;

vm.message = '30CM';
// vm.quantity = 5;

const dataObj = {
    message: "render message on app2",
    h1ID: "h1",
    customId: 'item-id-1',
    isBtnDisabled: false,
    btn1Id: "btn1",
    btn3Id: "btn3",
    inputMessage: "Hello, Howard~",
    messageTA:"TextArea ooo",
    selected: ""
  };
  

const vm2 = Vue.createApp({
    // template: `<h1 id=\"{{ h1ID }}\">{{ message }}</h1>`,
    data () {
        return {
            ...dataObj
        }
    }
}).mount('#app2');

function btn(){
    alert("點屁")
}