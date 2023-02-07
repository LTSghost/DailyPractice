const AllRouterLink={
    template:
    `
    <div :style="div">
    <template v-for="obj in object">
        <router-link
        :to="{path: '/'+obj.url}"
        @click=obj.method
        :class="[obj.active ? activeClass : '']"
        >{{ obj.text }}</router-link>&nbsp
    </template>
    </div>
    `,
    data() {
        return {
            div:{
                width: "fit-content",
                'background-color': 'lightgray'
            },
            object:[
                {text:"首頁",url:"",method:this.detectHome,"active":window.location.href.split("#")[1]=="/"},
                {text:"測試畫面1",url:"test1",method:this.detectTest1,"active":window.location.href.split("#")[1]=="/test1"},
                {text:"測試畫面2",url:"test2",method:this.detectTest2,"active":window.location.href.split("#")[1]=="/test2"},
                {text:"測試畫面3",url:"test3",method:this.detectTest3,"active":window.location.href.split("#")[1]=="/test3"},
                {text:"測試畫面4",url:"test4",method:this.detectTest4,"active":window.location.href.split("#")[1]=="/test4"},
            ],
            activeClass: 'linkRed',
        }
    },
    methods: {
        // click home link
        detectHome(){
            this.object[0]["active"] = true;
            this.object[1]["active"] = false;
            this.object[2]["active"] = false;
            this.object[3]["active"] = false;
            this.object[4]["active"] = false;
        },
        // click test1 link
        detectTest1(){
            this.object[0]["active"] = false;
            this.object[1]["active"] = true;
            this.object[2]["active"] = false;
            this.object[3]["active"] = false;
            this.object[4]["active"] = false;
        },
        // click test2 link
        detectTest2(){
            this.object[0]["active"] = false;
            this.object[1]["active"] = false;
            this.object[2]["active"] = true;
            this.object[3]["active"] = false;
            this.object[4]["active"] = false;
        },
        // click test2 link
        detectTest3(){
            this.object[0]["active"] = false;
            this.object[1]["active"] = false;
            this.object[2]["active"] = false;
            this.object[3]["active"] = true;
            this.object[4]["active"] = false;
        },
        detectTest4(){
            this.object[0]["active"] = false;
            this.object[1]["active"] = false;
            this.object[2]["active"] = false;
            this.object[3]["active"] = false;
            this.object[4]["active"] = true;
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