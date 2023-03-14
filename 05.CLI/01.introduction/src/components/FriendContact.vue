<!--
    ceci est un comonent par convention tu le mets dans un dossier 'components'
    et par convention ausi tu le nomme en maj avec chaque mot en maj juste la premiere lettre
-->

<!-- ici la template de notre component -->
<template>

    <!-- ici tu utilise la data, les methodes, les computers, les props, ... de ce component en particulier -->

    <!--
        pour utiliser les props c'est pas "this.nom" comme avec la data() mais juste "nom"
        avant avec les data() => <h2>{{ ami.nom }} {{ ami.prenom }}</h2>
        avec les props => <h2>{{ nom }} {{ prenom }}</h2>
    -->
    <h2>{{ nom }} {{ prenom }} {{ sex === '1' ? "(homme)" : "(femme)" }}</h2>

    <button @click="toggleDetails">{{ visibility ? 'hide' : 'Show' }} Details</button>
    <button @click="toggleSex">Changer de sex</button>

    <ul v-if="visibility">
        <li>
            <strong>Age : </strong>
            {{ age }}
        </li>
        <li>
            <strong>Tel : </strong>
            {{ numeroTel }}
        </li>
        <li>
            <strong>Mail : </strong>
            {{ mailAdress }}
        </li>
    </ul>

</template>

<!-- la logique de ce component -->
<script>
    //on exporte la data par defaut aussi ici
    export default {
        //voici les props que tu déclares ici et que tu utilisera dans tes balises html et dans ton template
        /*
            REMARQUE : concernant l'ecriture des props : 
            dans les balises html => mail-adress
            dans le tableau props et la template => mailAdress
            t'as remarqué la nuance ?? entre le -a et le A
        */
       /*
            AUTRE REMARQUE : concernant le props 'homme' pourquoi ne pas l'avoir utiliser pour toogle le sex ? =>parceque tu essaye de changer un truc qui a été déclarer dans le parents App.vue et tu ne peux pas c'est interdis ca sappel une inxpectetion de la mutation comment faire ?? => si tu veux pouvoir changer la valeur tu promp le stock dans une variable dans l'objet data() et c'est cette variable que tu vas utiliser !!
        */

        /* alors tu peux mettre sous forme de tableau comme ca mais le mieux ca reste de faire un objet; le tableau est meilleur si tu travail en solo
        props:[
            'nom',
            'prenom',
            'age',
            'numeroTel',
            'mailAdress',
            'homme'
        ],
        */
        //en faisant un objet on peux faire de la validation et si ya une erreur elle sera afficher en console via vuejs; l'objet est meilleur si tu travail en team
        props:{
            nom:{
                type: String,
                required: true
            },
            prenom:{
                type: String,
                required: true
            },
            age:{
                type: Number,
                required: true
            },
            numeroTel:{
                type: String,
                required: true
            },
            mailAdress:{
                type: String,
                required: true
            },
            homme:{
                type: String,
                required: false,
                default: '0'
            }
        },
        
        data(){
            return{
                visibility: false,
                /* plus besoin vu qu'on utilise les props
                ami: {
                    id: '01',
                    nom: 'Ramdane Mamcha',
                    prenom: 'Souhil',
                    age: 23,
                    tel: '0669884477',
                    mail: 'souhil@test.com'
                },
                */
                sex: this.homme
            }
        },
        methods: {
            toggleDetails(){
                this.visibility = !this.visibility
            },
            //ici on a utiliser la var 'sex' au lieu du promp 'homme' c'est comme ca qu'on peux changer la value
            toggleSex(){
                if(this.sex === '1'){
                    this.sex = '0'
                }else{
                    this.sex = '1'
                }
            }
        }
    }
</script>