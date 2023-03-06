<template>
    <section>
        <header><h1>Ma liste d'amis : </h1></header>
        <ul>
            <friend-contact></friend-contact>
            <friend-contact></friend-contact>
        </ul>
    </section>
</template>

<script>
    export default {
        data(){
            return{
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
            }
        }
    }
</script>