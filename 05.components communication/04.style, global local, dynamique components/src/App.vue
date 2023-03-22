<template>
  <div>
    <the-header></the-header>

    <!--
      pour pouvoir faire des bouttons de selection pour choisir quel component afficher tu commence d'abord par declarer une var dans la data() et tu lui attribut le nom de la balise de ton component; ensuite tu crees une methode que tu utilisera pour modifier le nom de ta var en le nom de la balise de ton autre component via un parametre passé dans le clickButton
    -->
    <button @click="setSelectedComponent('badge-list')">Afficher Badge</button>
    <button @click="setSelectedComponent('user-info')">Afficher Infos</button>

    <!-- la balise keep-alive sert si tu as un de tes élément qui dispose d'un input comme ici avec notre component badge-liste; si tu ecris un truc à l'intrieur puis tu switch de component puis tu reviens ton input gardera ce que tu as ecris dedans -->

    <!--
      - la balise component est primordiale pour pouvoir switch
      - le v-bind:is="" est necessaire aussi et tu mets à l'iterieur la var que t'as declarée
      - Iportant : si les balises de tes components avaient des props qui etaient passé comme attributs tu dois les passer aussi pour que le switch puisse marché
    -->
    
    <keep-alive>
      
      <component 
        
        :is="selectedComponent" 

        :full-name="activeUser.name"
        :info-text="activeUser.description"
        :role="activeUser.role">
      </component>
    </keep-alive>
    
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
      selectedComponent: 'badge-list',
      activeUser: {
        name: 'Ramdane Mamcha Souhil',
        description: 'Site owner and admin',
        role: 'admin',
      },
    }
  },
  methods:{
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    },
  }
};
</script>

<!--
  -le style ici va etre appliquer sur TOUS les components (c'est pas parceque tu l'as ecrits ici qu'il va etre utiliser que ici non il va etre utiliser partt)
  -pour qu'il soit utilioser QUE sur un component bien precis il faut utiliser le mot cle 'scoped'qui signifie que ce style sera appliqué QUE sur ce component-ci et pas les autre
-->
<style>
  html {
    font-family: sans-serif;
  }

  body {
    margin: 0;
  }
</style>