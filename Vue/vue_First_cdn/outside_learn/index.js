const tabHome = {
    template: `<div class="demo-tab"><input v-model="title">Home component</div>`,
    data: () => ({ title: 'Home component' })
}
const tabPosts = {
    template: `<div class="demo-tab"><input v-model="title">Posts component</div>`,
    data: () => ({ title: 'Posts component' })
}
const tabArchive = {
    template: `<div class="demo-tab"><input v-model="title">Archive component</div>`,
    data: () => ({ title: 'Archive component' })
}
const lightBox = {
    template: `
    <div class="lightbox">
        <div class="modal-mask" :style="modalStyle">
            <div class="modal-container"  @click.self="toggleModal">

                <div class="modal-body">
                    <header>
                        <slot name="header">Default Header</slot>
                    </header>
                <hr>
                    <main>
                        <slot>Default Body</slot>
                    </main>
                <hr>
                    <footer>
                        <slot name="footer">Default Footer</slot>
                    </footer>
                </div>

            </div>
        </div>

        <button @click="isShow = true">Click Me</button>
    </div>
  `,
  data: () => ({
    isShow: false
  }),
  computed: {
    modalStyle() {
      return {
        'display': this.isShow ? '' : 'none'
      };
    }
  },
  methods: {
    toggleModal() {
      console.log('click')
      this.isShow = !this.isShow;
    }
  }
}

const app = Vue.createApp({
    data() {
        return {
            currentTab: 'Home',
            tabs:['Home','Posts','Archive'],
            options: ['header', 'footer', 'default'],
            dynamic_slot_name: 'header'
        }
    },
    components:{
        tabHome,
        tabPosts,
        tabArchive,
        lightBox
    },
    computed: {
        currentTabComponent(){
            return `tab-${ this.currentTab.toLowerCase() }`;
        }
    },
    methods: {
    
    },
}).mount("#app")