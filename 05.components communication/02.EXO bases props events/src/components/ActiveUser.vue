<template>

    <h2>Username : {{ userName }}</h2>
    <h3>Age : {{ userAge }}</h3>

    <button @click="deleteUser">Delete User</button>

</template>

<script>
  export default{
    props:[
        'id',
        'userName',
        'userAge',
    ],
    emits:['delete-user'],
    methods:{
        deleteUser(){
            this.$emit('delete-user', this.id)
        }
    }
  }
</script>