<template>
<form @submit.prevent="submitData">
    <div>
        <label for="">Username : </label>
        <input type="text" v-model="enteredUsername"/>
    </div>

    <div>
        <label for="">Age : </label>
        <input type="text" v-model="enteredAge"/>
    </div>

    <div>
        <button type="submit">Insert Data</button>
    </div>
</form>
</template>

<script>
  export default{
    data(){
      return{
        enteredUsername:'',
        enteredAge:''
      }
    },
    emits:['submit-data'],
    methods:{
        submitData(){
            this.$emit('submit-data', this.enteredUsername, this.enteredAge)
        }
    }
  }
</script>