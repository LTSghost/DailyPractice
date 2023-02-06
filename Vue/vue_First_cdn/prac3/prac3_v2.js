const AllRouterLink={
    props:["nowHref"],
    template:
    `
    <div :style="div">
    <!-- give <router-link> click event, according recent URL to add class .linkRed  -->
        <router-link to="/" @click="detectHome()" :class="[homeIsActive ? activeClass : '']">首頁</router-link>&nbsp;
        <router-link to="/test1" @click="detectTest1()" :class="[test1IsActive ? activeClass : '']">測試畫面1</router-link>&nbsp;
        <router-link to="/test2" @click="detectTest2()" :class="[test2IsActive ? activeClass : '']">測試畫面2</router-link>&nbsp;
        <router-link to="/test3" @click="detectTest3()" :class="[test3IsActive ? activeClass : '']">測試畫面3</router-link>&nbsp;
        <router-link to="/test4" @click="detectTest4()" :class="[test4IsActive ? activeClass : '']">測試畫面4</router-link>&nbsp;
    </div>
    `,
    data() {
        return {
            div:{
                width: "fit-content",
                'background-color': 'lightgray'
            },
            activeClass: 'linkRed',
            // specify nowHref(recent URL) to add class .linkRed
            homeIsActive: this.nowHref == router.getRoutes()[0]['path'],
            test1IsActive: this.nowHref == router.getRoutes()[1]['path'],
            test2IsActive: this.nowHref == router.getRoutes()[2]['path'],
            test3IsActive: this.nowHref == router.getRoutes()[3]['path'],
            test4IsActive: this.nowHref == router.getRoutes()[4]['path'],
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
};

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



const router = VueRouter.createRouter({
    // history: VueRouter.createWebHistory(),  // 方便 SEO (search engine optimization)?
    history: VueRouter.createWebHashHistory(),
    routes: [
        {path:'/', component: Home},
        {path:'/test1', component: Test1},
        {path:'/test2', component: Test2},
        {path:'/test3', component: Test3},
        {path:'/test4', component: Test4},
    ]
})

const app = Vue.createApp({
    data() {
        return {
            nowHref:window.location.href.split("#")[1]
        }
    },
    components:{
        AllRouterLink
    },
    methods: {
    },
}).use(router).mount("#app")