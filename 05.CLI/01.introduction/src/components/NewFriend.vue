<template>
    <form @submit.prevent="submitData">
        <div>
            <label for="">Nom : </label>
            <input type="text" v-model="enteredName"/>
        </div>
        <div>
            <label for="">Prenom : </label>
            <input type="text" v-model="enteredSurname"/>
        </div>
        <div>
            <label for="">Age : </label>
            <input type="number" v-model="enteredAage"/>
        </div>
        <div>
            <label for="">Tel : </label>
            <input type="text" v-model="enteredTel"/>
        </div>
        <div>
            <label for="">Mail : </label>
            <input type="text" v-model="enteredMail"/>
        </div>
        <div>
            <button>Add Contact</button>
        </div>
    </form>
</template>

<script>
    export default{
        data(){
            return{
                enteredName:'',
                enteredSurname:'',
                enteredAage:0,
                enteredMail:'',
                enteredTel:''
            }
        },
        emits:['add-contact'],
        methods:{
            submitData(){
                this.$emit(
                    'add-contact',
                    this.enteredName,
                    this.enteredSurname,
                    this.enteredAage,
                    this.enteredTel,
                    this.enteredMail
                )
            }
        }
    }
</script>