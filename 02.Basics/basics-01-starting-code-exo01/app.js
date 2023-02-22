Vue.createApp({
    data(){
        return{
            nom: 'souhil',
            age: 23,
            nombreFavori: 33,
            imageLink: "https://static.cnews.fr/sites/default/files/styles/image_750_422/public/photo-1468276311594-df7cb65d8df6_617115d1e282e.jpeg?itok=dCLMJuQJ",
        }
    },

    methods:{
        futureAge(){
            return this.age +5
        },
        favorit(){
            const random = Math.random()
            if(random < 0.5) return random
            else return this.nombreFavori
        }
    }
}).mount('#assignment')