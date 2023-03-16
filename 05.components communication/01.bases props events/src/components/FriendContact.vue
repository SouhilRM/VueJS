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
    <h2>{{ nom }} {{ prenom }} {{ isHomme ? "(homme)" : "(femme)" }}</h2>

    <button @click="toggleDetails">{{ visibility ? 'hide' : 'Show' }} Details</button>

    <!--tu peux sois declarer une methode et configurer la logique dans le script-->
    <button @click="toggleSex">Changer de sex</button>

    <!-- tu peux aussi configurer ta logique directement dans ta balise ci-dessous; attention tu rajoutes pas le 'this' ici contrairement à l'interieur de ta methode -->
    <button @click="$emit('delete-contact',id)">Supprimer</button>

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
            AUTRE REMARQUE : concernant le props 'isHomme' pourquoi ne pas l'avoir utiliser directement pour toogle le sex ? =>parceque tu essaye de changer un truc qui a été déclarer dans le parents App.vue et tu ne peux pas c'est interdis ca sappel une inxpectetion de la mutation comment faire ?? => si tu veux pouvoir changer la valeur tu promp le stock dans une variable dans l'objet data() et c'est cette variable que tu vas utiliser !!
        */

        /* alors tu peux mettre sous forme de tableau comme ca mais le mieux ca reste de faire un objet; le tableau est meilleur si tu travail en solo
        props:[
            'id',
            'nom',
            'prenom',
            'age',
            'numeroTel',
            'mailAdress',
            'isHomme'
        ],
        */
        //en faisant un objet on peux faire de la validation et si ya une erreur elle sera afficher en console via vuejs; l'objet est meilleur si tu travail en team
        props:{
            /*
                voici les autre types si besoin : 
                -String
                -Number
                -Boolean
                -Array
                -Object
                -Date
                -Function
                -Symbol
            */

            id:{
                type: String,
                required: true
            },
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
            isHomme:{
                type: Boolean,
                required: false,
                default: true
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
                //sex: this.isHomme et là tu utilises directement isHomme dans ton <h2> au lieu de sex pour changer la valeur directement dans le parent
            }
        },

        //alors les 'emits' d'apres ce que j'ai compris c'est juste les events que tu vas utiliser pour commun avec le parent tu les mets dans le tableau emits pour preciser à vue que c'est des events qui vont toucher à la mutation donc tt est s controle
        emits:['toogle-sex', 'delete-contact'],

        methods: {
            toggleDetails(){
                this.visibility = !this.visibility
            },

            /*
            //ici on a utiliser la var 'sex' au lieu du promp 'isHomme' c'est comme ca qu'on peux changer la value
            toggleSex(){
                this.sex = !this.sex
            }
            */

            /*
                -Bien on a vu comment toogle le sex sans toucher a la valeur initiale dans le parent App.vue car on a dit que c'etait une atempte à la mutation du coup on l'a stocker dans une var à l'iterieur de la data() du fils FriendContact.vue

                -Mais maintenant on aimerait bien justement modifier la valeur directement dans le pere car imaginons t'as une base de données et tu aimerais bien que les changement soit appliqués aussi dedant

                -Comment faire ?? => on utilise les évenement; le component fils fait appel à un event pour communiquer avec son parent App
            */

            toggleSex(){
                //à l'intrieur de ton event tu utilises la methode '$emit()' n'oublie pas le dollar et tu rentre comme parametres le nom de ton event en 'machin-case' la maniere d'ecrire est importante !! que tu vas utiiser dans le @clickboutton dans le template du parent App.vue; et en second parametre l'id que tu vas cherché dans les props et qui a été passé via le parent
                this.$emit('toogle-sex', this.id)
            }
        }
    }
</script>