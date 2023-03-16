<template>
  <section>
  <header>
    <h1>Exo components : </h1>

    <user-data @submit-data="submitData"></user-data>

    <ul>
      <active-user
        v-for="user in users"
        :key="user.id"

        :id="user.id"
        :user-name="user.username"
        :user-age="user.age"

        @delete-user="deleteUser"
      ></active-user>
    </ul>
  </header>
  </section>
</template>

<script>
  export default{
    data(){
      return{
        users:[
          {
            id:'00',
            username:'default-user',
            age:'20'
          }
        ]
      }
    },
    methods:{
      deleteUser(userId){
        this.users = this.users.filter( user => user.id !== userId )
      },
      submitData(username, age){
        const newUser = {
          id: new Date().toISOString(),
          username: username,
          age: age
        }
        this.users.push(newUser)
      }
    }
  }
</script>