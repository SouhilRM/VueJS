//d'abord faur creer l'application via l'objet createApp()
const app = Vue.createApp({
    //on a en premier 'data' qui est propre à vue tu dos l'utiliser ya pas le choix
    //data: function() { } tu peux l'ecrire comme ca mais je prefere la manière abregée
    //data: ()=> { } mais tu peux encore abregé comme suit : 
    data() {
        //que cette fonction data() ?
        //elle renvoie un objet TOUJOUR un objet
        return {
            //et à l'iterieur de ton objet tu peux retourner ce que tu veux : nombre chaine de cara un tableau un autre objet .... comme tu veux
            coursGoal: "mon but c'est ljannah inchaàLaah !!!",
            //petite remarque : il faut te dire que tous ce qui est renvoyé via l'objet data() pourra etre afficher sur ton fichierHTML grace aux "{{  }}"

            //tu peux aussi retourner des attributs à mettre dans ton html
            vueLink: "https://vuejs.org",
            //attention cependant pour les attributs tu utilise le v-bind et non pas les {{}}

            //tu peux aussi injecter de l'html 
            html: '<h2 style="color: red;">ceci est du html billy</h2>',
            //attention injecter de l'html comme ca peut etre dangereux à utiliser avec précotion
        }
    },

    //En plus de data() il y a aussi les méthodes
    methods: {
        //ici tu déclare tes fonctions et événements
        monBut() {
            const randomNumber = Math.random()
            if( randomNumber < 0.5 ){
                return 'Hammouda !!'
            }else {
                //bien rtu peux aussi retpurner un data déclaré plus haut grace à "this."
                return this.coursGoal
            }
        }
    }
})

//ensuite on veut lier notre VueApplication à notre html
//on a utiliser ici l'id de la balise secion ce qui implique que tous les fils de cette balise seront affecter par VueJS
app.mount('#user-goal')