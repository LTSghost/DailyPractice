const AllRouterLink={
    template:
    `
    <div :style="div">
    <template v-for="(value,key,index) in object">
        <router-link
        :to="{path: '/'+value[1]}"
        @click=value[2]
        :class="[value[3] ? activeClass : '']"
        >{{ value[0] }}</router-link>&nbsp
    </template>
    </div>
    `,
    data() {
        return {
            div:{
                width: "fit-content",
                'background-color': 'lightgray'
            },
            object:{
                home:["首頁","",this.detectHome(),true],
                route1:["測試畫面1","test1",this.detectTest1(),false],
                route2:["測試畫面2","test2",this.detectTest2(),false],
                route3:["測試畫面3","test3",this.detectTest3(),false],
                route4:["測試畫面4","test4",this.detectTest4(),false]
            },
            // homeIsActive: true,
            activeClass: 'linkRed',
        }
    },
    methods: {
        detectHome(){
            this.homeIsActive = true,
            this.test2IsActive = false,
            this.test1IsActive = false,
            this.test3IsActive = false,
            this.test4IsActive = false
        },
        detectTest1(){
            console.log(2)
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



const router = VueRouter.createRouter({
    // history: VueRouter.createWebHistory(),  // 方便 SEO (search engine optimization)
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
        }
    },
    components:{
        AllRouterLink
    },
    methods: {
    },
}).use(router).mount("#app")