//-----------------------------------version 1
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

//-----------------------------------version 2
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

//-----------------------------------version 3
const vm = Vue.createApp({
    // template: `{{ greeting }} 朋友`,
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

// vm.message = '30CM';
// vm.quantity = 5;

