<!--
    ceci va etre notre MAIN fichier vue ou on va ici gerer les autres fichier.vue
    tu peux le nomer comme tu veux mais par convention on utilise le nom App.vue
-->

<!-- la partie template ou on va ecrire notre tructure html -->
<template>
    <section>
        <header><h1>Ma liste d'amis : </h1></header>
        
        <new-contact @add-contact="addContact"></new-contact>

        <ul>
            <!-- ok c'est bien d'utiliser les components mais le probleme c'est que ces trucs utilisent la data du comopnents qui est statique et on aimerai bien ajouter des components avec des infos entrés comme valeurs manuellement comment faire ?? comme ci-dessous à l'iterieur des balises html; et ou vas tu déclarer les attributs ?? en utilisant les "props" dans la logique du component-->

            <!-- alrs tu peux ecrire comme ca à l'interieure de tes balises html manuellement mais on aimerait bien rendre la chose encore plus dinamyque en utilisant la logique vuejs vue precedement que tu vas ecrire à l'interieur de ton script dnas le fichier App.vue bien sur
                <friend-contact
                    nom="Ramdane Mamcha"
                    prenom="Souhil"
                    age=23
                    numero-tel="0669884477"
                    mail-adress="souhil@test.com"
                    homme="1"
                ></friend-contact>
            -->

            <friend-contact
                v-for="ami in amis"
                :key="ami.id"
                :id="ami.id"
                :nom="ami.nom"
                :prenom="ami.prenom"
                :age="ami.age"
                :numero-tel="ami.tel"
                :mail-adress="ami.mail"
                :is-homme="ami.sex"

                @toogle-sex="toogleSexStatus"
                @delete="deleteContact"
            ></friend-contact>

        </ul>
    </section>
</template>

<!-- la partie script ou on va ecrire notre logique -->
<script>
    //pour exporter tu utilises le mot clé 'export'

import NewFriend from './components/NewFriend.vue';

    //le mot clé 'default' signifie que l'objet par defaut qui va etre exporter ca sera notre objet data()
    export default {
    data() {
        return {
            amis: [
                {
                    id: "01",
                    nom: "Ramdane Mamcha",
                    prenom: "Souhil",
                    age: 23,
                    tel: "0669884477",
                    mail: "souhil@test.com",
                    sex: true
                },
                {
                    id: "02",
                    nom: "Bekara",
                    prenom: "Ghizlen",
                    age: 30,
                    tel: "0699999999",
                    mail: "laghiz@test.com",
                    sex: false
                },
                {
                    id: "03",
                    nom: "Soussi",
                    prenom: "Faycel",
                    age: 22,
                    tel: "0655774411",
                    mail: "faycelKun@test.com",
                    sex: true
                }
            ]
        };
    },
    methods: {
        toogleSexStatus(amiId) {
            const friend = this.amis.find(ami => ami.id === amiId);
            friend.sex = !friend.sex;
        },
        addContact(nom, prenom, age, tel, mail){//attention l'ordre compte !!
            const newFriendContact = {
                id: new Date().toISOString(), //pour geenerer un Id unique
                nom: nom,
                prenom: prenom,
                age: age,
                tel: tel,
                mail: mail,
                sex: false
            }
            this.amis.push(newFriendContact)
        },
        deleteContact(friendId){
            this.amis = this.amis.filter( ami => ami.id !== friendId )
        }
    },
    components: { NewFriend }
}
</script>