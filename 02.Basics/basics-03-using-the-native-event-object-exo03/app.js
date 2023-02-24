const app = Vue.createApp({
    data() {
      return {
        numero: 0,
      };
    },
    methods: {
        add_number(){
            this.numero = this.numero + 5
        },
        remove_number(){
            this.numero--
        }
    },
  
    computed: {
        hotCold(){
            if(this.numero > 10) return 'Too much!'
            else if(this.numero < 10) return 'Not there yet'
            else return 'perfect'
        }
    },
  
    watch: {
        numero(){
            console.log('Watcher executing...')
            //on est obligé de faire ca sinon le 'this' va etre iterpreter par la foncion JS setTimeout() et moi je veux qua sa soit le this de data()
            const that = this
            setTimeout(()=>that.numero = 0 ,5000)
        }
    },
  });
  
  app.mount('#assignment');
  