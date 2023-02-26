const app = Vue.createApp({
    data(){
        return{
            myClass: '',
            visibility: true,
            color: ''
        }
    },
    methods:{
        addClass(event){
            this.myClass = event.currentTarget.value
        },
        toggleButton(){
            this.visibility = !this.visibility
        },
        chooseColor(event){
            this.color = event.currentTarget.value
        }
    },
    computed:{
        toggleClass(){
            return{
                visible: this.visibility, 
                hidden: !this.visibility
            }
        }
    }
})
app.mount('#assignment')