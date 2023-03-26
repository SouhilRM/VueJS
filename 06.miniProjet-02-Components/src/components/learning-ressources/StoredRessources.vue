<!--
    Alors pourquoi ce component existe-il ?? alors qu'on aurait pu juste mettre toutes cette logique et ce style à l'iterieure de notre App.vue et on n'utilise meme pas les slot
    => c'est juste une convention du sensei il aime faire comme ca pour evite de mettre le style du <ul></ul> à l'iterieur du App.vue et il prefere le scoppe ici separement pour ne rien scope dans App.vue et garder le style global dedans c'est tout; si tu veux scope un style en particulier tu le fais à l'interieur de tes components
-->
<template>
<ul>
    <learning-ressource

      v-for="res in ressources"
      :key="res.id"

      :title="res.title"
      :description="res.description"
      :link="res.link"
    ></learning-ressource>
</ul>
</template>

<script>

import LearningRessource from './LearningRessource.vue'

export default{

    components:{
        LearningRessource,
    },

    props:[
        'ressources'
    ],
}

</script>

<style scoped>
    ul {
    list-style: none;
    margin: 0;
    padding: 0;
    margin: auto;
    max-width: 40rem;
    }
</style>