const app = Vue.createApp({
    data() {
      return {
        live_text: '',
        fix_text: '',
      };
    },
    methods:{
        qst_01(){
            alert('ceci est le message de la question 01')
        },
        set_live_text(event){
            this.live_text = event.currentTarget.value
        },
        set_fix_text(event){
            this.fix_text = event.currentTarget.value
        }
    }
  });
  
  app.mount('#assignment');
  