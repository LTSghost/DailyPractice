const TwoInput = {
    props:["twoInput1","twoInput2"],
    template:
    `
    <div>
        字串1：<input :value="twoInput1" @input="$emit('update:twoInput1', $event.target.value)" >
        <br>
        字串2：<input :value="twoInput2" @input="$emit('update:twoInput2', $event.target.value)" >
    </div>
    <p :style='twoInputP'>{{ reverseMethods() }}</p>
    `,
    data() {
        return {
            twoInputP:{
                color: "#f6115d",
                "padding-left": "20px"
            }
        }
    },
    methods: {
        reverseMethods(){
            var twoInput1 = this.twoInput1;
            var twoInput2 = this.twoInput2;
            var mergeText = "";
            var limit = Math.max(twoInput1.length,twoInput2.length)

            for (let i = 0; i < limit; i++) {
                if (twoInput1[i]){
                    mergeText += twoInput1[i]
                }
                if (twoInput2[i]){
                    mergeText += twoInput2[i]
                }
            }

            return "使用 Methods 計算後反轉字串 : " + mergeText
        }
    },
}

const app = Vue.createApp({
    data() {
        return {
            input1:"abcd",
            input2:"12345",
            appP:{
                color: "#f6115d",
                "padding-left": "20px"
            }
        }
    },
    components: {
        "two-input": TwoInput
    },
    computed: {
        reverseComputed(){
            var input1 = this.input1;
            var input2 = this.input2;
            var mergeText = "";
            var limit = Math.max(input1.length,input2.length)
            
            for (let i = 0; i < limit; i++) {
                if (input1[i]){
                    mergeText += input1[i]
                }
                if (input2[i]){
                    mergeText += input2[i]
                }
            }

            // loop times according input text length ;  || Logical Operators will make HTML dead
            // for (let i = 0; i < input1.length || input2.length; i++){
            //     if (i < input1.length){
            //         mergeText += input1[i]
            //     }
            //     if (i < input2.length){
            //         mergeText += input2[i]
            //     }
            // }

            return "使用 Computed 計算後反轉字串 : " + mergeText
        }
    },
}).mount("#app");