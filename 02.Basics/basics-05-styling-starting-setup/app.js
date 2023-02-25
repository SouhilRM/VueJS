const app = Vue.createApp({
    data(){
        return{
            boxA: false,
            boxB: false,
            boxC: false,
        }
    },
    computed:{
        boxClasses(){
            return { newClass: this.boxC }
        }
    },
    methods:{
        boxSelected(box){
            if(box === 'A'){

                //console.log('A')  juste pour vérif
                //this.boxA = true

                this.boxA = !this.boxA  //c'est comme ca que tu crees un effet toogle

            }else if(box === 'B'){

                //console.log('B')  juste pour vérif
                //this.boxB = true

                this.boxB = !this.boxB  //c'est comme ca que tu crees un effet toogle

            }else {

                //console.log('C')  juste pour vérif
                //this.boxC = true

                this.boxC = !this.boxC  //c'est comme ca que tu crees un effet toogle

            }
        },
    }
})
app.mount('#styling')