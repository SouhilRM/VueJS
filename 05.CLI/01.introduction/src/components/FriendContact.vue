<template>

    <h2>{{ ami.nom }} {{ ami.prenom }}</h2>

    <button @click="toggleDetails">{{ visibility ? 'hide' : 'Show' }} Details</button>

    <ul v-if="visibility">
        <li>
            <strong>Age : </strong>
            {{ ami.age }}
        </li>
        <li>
            <strong>Tel : </strong>
            {{ ami.tel }}
        </li>
        <li>
            <strong>Mail : </strong>
            {{ ami.mail }}
        </li>
    </ul>

</template>

<script>
    export default {
        data(){
            return{
                visibility: false,
                ami: {
                    id: '01',
                    nom: 'Ramdane Mamcha',
                    prenom: 'Souhil',
                    age: 23,
                    tel: '0669884477',
                    mail: 'souhil@test.com'
                }
            }
        },
        methods: {
            toggleDetails(){
                this.visibility = !this.visibility
            }
        }
    }
</script>