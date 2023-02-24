const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: 'popo',
      fullname: 'Ramdane Mamcha Souhil',
    };
  },
  methods: {
    /*
      tu peux enlever ca vu que tu utilise le v-model
      setName(event) {
        this.name = event.target.value;
      },
    */
    
    /*
      pour les evenements tu utilises tjr les méthodes !!!!
    */
    resetButton(){
      this.name = ''
    },

    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    
    method_version(){
      console.log("mounyayyou !!")
      return this.fullname
    }
  },

  //les computeurs
  computed: {
    computed_version(){
      console.log("mounyayyou !!")
      return this.fullname
    }
  },

  //les wachers c'est des fonctions qui sont utile lorceque tu execute du code qui peut-etre mais pas nessaicerment change la valeur d'une data() en reaction à une autre vleur les meilleurs exemple à ca sont les http-requests et les timers ou bien stocker quelque chose localement
  //le nom de la fonction doit etre le meme que celui de ton attribut qui est dans data(){} ici c'est 'counter'
  watch: {
    //dans cette exemple à chaque fois que notre counter depasse 50 il est reinitialiser
    counter(value){
      if(value > 50){
        this.counter = 0
      }
    }
  },
});

app.mount('#events');
