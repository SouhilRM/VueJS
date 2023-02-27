const app = Vue.createApp({
  data() {
    return {
      //on définit les goals sous forme de tableau car y'en a plusieurs
      goals: [],
      goalValue: ''
    }
  },
  methods:{
    addGoal(){
      this.goals.push(this.goalValue)
    },
    dropGoal(ind){
      //c'est une fonction de base du JS qui permet de supprimer un element d'un tableau à artie de l'index va voir la doc pour plus d'info
      this.goals.splice(ind, 1)
    }
  }
})

app.mount('#user-goals');
