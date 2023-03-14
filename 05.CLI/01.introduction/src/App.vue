<!--
    ceci va etre notre MAIN fichier vue ou on va ici gerer les autres fichier.vue
    tu peux le nomer comme tu veux mais par convention on utilise le nom App.vue
-->

<!-- la partie template ou on va ecrire notre tructure html -->
<template>
    <section>
        <header><h1>Ma liste d'amis : </h1></header>
        <ul>
            <!-- ok c'est bien d'utiliser les comonents mais le probleme c'est que ces trucs utilisent la data du comopnents qui est statique et on aimerai bien ajouter des comonents avec des infos entrés comme valeurs manuellement comment faire ?? comme ci-dessous à l'iterieur des balises html; et ou vas tu déclarer les attributs ?? en utilisant les "props" dans la logique du component-->

            <friend-contact
                nom="Ramdane Mamcha"
                prenom="Souhil"
                age=23
                numero-tel="0669884477"
                mail-adress="souhil@test.com"
                homme="1"
            ></friend-contact>

            <friend-contact
                nom="Bekara"
                prenom="Ghizlen"
                age=30
                numero-tel="0699999999"
                mail-adress="laghiz@test.com"
                homme="0"
            ></friend-contact>

        </ul>
    </section>
</template>

<!-- la partie script ou on va ecrire notre logique -->
<script>
    //pour exporter tu utilises le mot clé 'export'
    //le mot clé 'default' signifie que l'objet par defaut qui va etre exporter ca sera notre objet data()
    export default {
        data(){
            return{
                /* plus besoin de ca ici vu qu'on utilise les comonents
                amis: [
                    {
                        id: '01',
                        nom: 'Ramdane Mamcha',
                        prenom: 'Souhil',
                        age: 23,
                        tel: '0669884477',
                        mail: 'souhil@test.com'
                    },
                    {
                        id: '02',
                        nom: 'Bekara',
                        prenom: 'Ghizlen',
                        age: 30 ,
                        tel: '0699999999',
                        mail: 'laghiz@test.com'
                    }
                ]
                */
            }
        }
    }
</script>