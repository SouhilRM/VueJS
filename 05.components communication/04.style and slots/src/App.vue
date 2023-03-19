<template>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
  </div>
</template>

<script>

//ici tu importes tes comonents juste apres le debut du script
import TheHeader from './components/TheHeader.vue';
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';

export default {

  //pour itiliser tes components localement tu utilises le mot cle 'components'
  components:{
    //pour les declarer tu utilises les meme termes que t'as utilisé pour les importer; et bien sur pour pouvoir les utiliser sur ton template comme d'hab tout en minuscule avec un tiret du six entre chaque mot pour que vuejs comprennent => "TheHeader" ==> "the-header"
    TheHeader,
    BadgeList,
    UserInfo
  },

  data() {
    return {
      activeUser: {
        name: 'Ramdane Mamcha Souhil',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
};
</script>

<style scoped>
  html {
    font-family: sans-serif;
  }

  body {
    margin: 0;
  }
</style>