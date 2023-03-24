const app = Vue.createApp({
    data(){
        return{
            monsterHealth: 100,
            playerHealth: 100,
            round: 0,
            winner: null,
            logs: []
        }
    },
    methods:{
        attackMonster(){
            this.round ++
            const attackValue = aleatory(5,8)
            this.monsterHealth = this.monsterHealth - attackValue
            this.attackPlayer()
            this.logsList('player','attack',attackValue)
        },
        attackPlayer(){
            const attackValue = aleatory(8,12)
            this.playerHealth = this.playerHealth - attackValue
            this.logsList('monster','attack',attackValue)
        },
        specialAttack(){
            this.round ++
            const attackValue = aleatory(10,20)
            this.monsterHealth = this.monsterHealth - attackValue
            this.attackPlayer()
            this.logsList('player','attack',attackValue)
        },
        healing(){
            this.round ++
            const healingValue = aleatory(10,20)
            if(this.playerHealth + healingValue > 100){
                this.playerHealth = 100
            }
            else{
                this.playerHealth = this.playerHealth + healingValue
            }
            this.attackPlayer()
            this.logsList('player','heal',healingValue)
        },
        restartGame(){
            this.monsterHealth = 100,
            this.playerHealth = 100,
            this.round = 0,
            this.winner = null
            this.logs = []
        },
        surrender(){
            this.winner = 'monster'
        },
        logsList(who, what, combien){
            this.logs.unshift({ //unshift() ajoute un élément au début du tableau
                person: who,
                doing: what,
                howMany: combien
            })
        }
    },
    computed:{
        specialAttackDisable(){
            return this.round % 3 !== 0
        },
        monsterBarStyle(){
            if(this.monsterHealth <= 0) return {width: '0%'}
            return {width: this.monsterHealth + '%'}
        },
        playerBarStyle(){
            if(this.playerHealth <= 0 || this.winner === "monster") return {width: '0%'}
            return {width: this.playerHealth + '%'}
        }
    },
    watch:{
        monsterHealth(value){
            if(value <= 0 && this.playerHealth <= 0){
                // égalité
                this.winner = 'draw'
            }
            else if(value <= 0){
                //monster lost
                this.winner = 'player'
            }
        },
        playerHealth(value){
            if(value <= 0 && this.monsterHealth <= 0){
                // égalité
                this.winner = 'draw'
            }
            else if(value <= 0){
                //monster lost
                this.winner = 'monster'
            }
        }
    }
})
app.mount('#game')

//créons une fonction qui retourne un nombre aléatoire entre deux nombre donnés min et max et sans vergule aussi
function aleatory(min, max){
    return Math.floor(Math.random() * (max - min) + min)
}
