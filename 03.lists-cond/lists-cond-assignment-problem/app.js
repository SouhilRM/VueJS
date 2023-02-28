const app = Vue.createApp({
    data(){
        return{
            tasks: [],
            taskValue: '',
            visibility: true
        }
    },
    methods:{
        addTask(){
            this.tasks.push(this.taskValue)
            this.taskValue = '' //sert à réinitialiser la valeur de l'input apres insertion
        },
        toggleButton(){
            this.visibility = !this.visibility
        }
    },
    computed:{
        buttonCaption(){
            return this.visibility ? 'Hide tasks' : 'Show tasks'
        }
    }
})
app.mount('#assignment')