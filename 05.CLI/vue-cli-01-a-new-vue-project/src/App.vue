<template>
    <section>
        <h2>Ma liste d'amis : </h2>
        <ul>
            <li>ami 01</li>
            <li>ami 02</li>
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
                        tel: '0669884477'
                    },
                    {
                        id: '02',
                        nom: 'Bekara',
                        prenom: 'Ghizlen',
                        age: 30 ,
                        tel: '0699999999',
                    }
                ]
            }
        }
    }
</script>