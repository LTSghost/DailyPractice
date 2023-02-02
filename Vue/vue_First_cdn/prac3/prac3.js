const Home = {
    data() {
        return {
            p:{
                "font-size":"6ch",
                color: "blue",
                "padding-left": "200px",
            }
        }
    },
    template: '<p :style="p">首頁<p>'
};
const Test1 = {
    data() {
        return {
            p:{
                "font-size":"6ch",
                color: "blue",
                "padding-left": "150px"
            }
        }
    },
    template: '<p :style="p">測試畫面1<p>'
};
const Test2 = {
    data() {
        return {
            p:{
                "font-size":"6ch",
                color: "blue",
                "padding-left": "150px"
            }
        }
    },
    template: '<p :style="p">測試畫面2<p>'
};
const Test3 = {
    data() {
        return {
            p:{
                "font-size":"6ch",
                color: "blue",
                "padding-left": "150px"
            }
        }
    },
    template: '<p :style="p">測試畫面3<p>'
};
const Test4 = {
    data() {
        return {
            p:{
                "font-size":"6ch",
                color: "blue",
                "padding-left": "150px"
            }
        }
    },
    template: '<p :style="p">測試畫面4<p>'
};

const routes = [{
    path: '/',
    component: Home
}, {
    path: '/test1',
    component: Test1
},{
    path: '/test2',
    component: Test2
},{
    path: '/test3',
    component: Test3
},{
    path: '/test4',
    component: Test4
}, ]
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

const app = Vue.createApp({
    data() {
        return {
            p:"",
            div:{
                'background-color': 'lightgray'
            },            
            isActive: true,
            activeClass: 'active'
        }
    },
    methods: {
      changeLocation(){
        this.p = window.location.href
      }  
    },
}).use(router).mount("#app")