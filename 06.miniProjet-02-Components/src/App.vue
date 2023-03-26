<template>
  <the-header title="Remember Me"></the-header>
  <stored-ressources
    :ressources="storedResources"
  ></stored-ressources>
</template>

<script>

import StoredRessources from './components/learning-ressources/StoredRessources.vue'
import TheHeader from './components/layouts/TheHeader.vue'

export default{

  components:{
    StoredRessources,
    TheHeader,
  },

  data(){
    return{
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official VueJs documentation.',
          link: 'https://vuejs.org'
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://google.com'
        },
      ]
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  * {
    box-sizing: border-box;
  }

  html {
    font-family: 'Roboto', sans-serif;
  }

  body {
    margin: 0;
  }
</style>