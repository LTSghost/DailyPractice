// router components
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
    template: '<p :style="p">首頁</p>'
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
    template: '<p :style="p">測試畫面1</p>'
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
    template: '<p :style="p">測試畫面2</p>'
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
    template: '<p :style="p">測試畫面3</p>'
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
    template: '<p :style="p">測試畫面4</p>'
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
    history: VueRouter.createWebHashHistory(),  // history 設定為 createWebHashHistory() 即可開啟 HTML5 (History API) Mode
    routes,
})

const app = Vue.createApp({
    data() {
        return {
            p:"",
            wlp: window.location.pathname,
            wlh: window.location.href,
            div:{
                width: "fit-content",
                'background-color': 'lightgray'
            },
            // specify URL to add class .linkRed
            homeIsActive: window.location.href.split("#")[1] == routes[0].path,
            test1IsActive: window.location.href.split("#")[1] == routes[1].path,
            test2IsActive: window.location.href.split("#")[1] == routes[2].path,
            test3IsActive: window.location.href.split("#")[1] == routes[3].path,
            test4IsActive: window.location.href.split("#")[1] == routes[4].path,
            activeClass: 'linkRed'
        }
    },
    methods: {
        detectHome(){
            this.homeIsActive = true,
            this.test1IsActive = false,
            this.test2IsActive = false,
            this.test3IsActive = false,
            this.test4IsActive = false
        },
        detectTest1(){
            this.test1IsActive = true,
            this.homeIsActive = false,
            this.test2IsActive = false,
            this.test3IsActive = false,
            this.test4IsActive = false
        },
        detectTest2(){
            this.test2IsActive = true,
            this.homeIsActive = false,
            this.test1IsActive = false,
            this.test3IsActive = false,
            this.test4IsActive = false
        },
        detectTest3(){
            this.test3IsActive = true,
            this.homeIsActive = false,
            this.test1IsActive = false,
            this.test2IsActive = false,
            this.test4IsActive = false
        },
        detectTest4(){
            this.test4IsActive = true,
            this.homeIsActive = false,
            this.test1IsActive = false,
            this.test2IsActive = false,
            this.test3IsActive = false
        }
    },
    computed: {
    },
}).use(router).mount("#app")