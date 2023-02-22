const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name : '',
      confirmedName: '',
    };
  },
  methods:{
    increment(){
      this.counter++
    },
    decrement(){
      this.counter--
    },
    incrementPlus(num){
      this.counter = this.counter + num
    },
    decrementMoins(num){
      this.counter = this.counter - num
    },

    //pour recuperer la valeur de l'input tu es obligé d'utiliser lattribut clé "event" pour pouvoir recupere la valeur via le currentTarget ou le target ca marche aussi
    setName(event, prenom){
      this.name = event.currentTarget.value + ' ' + prenom
    },

    formulaire(){
      alert('données envoyées avec succés !!')
    },

    setConfirmedName(event){
      this.confirmedName = event.currentTarget.value
    }
  }
});

app.mount('#events');
