import { createApp } from 'vue';


//en faisant un import de tous les comonents ici dans ton mainJs tous ces components vont etre dl pour que vue puisses les afficher, quand c'est une petite application comme ici c'est pas un probleme, mais quand tu devras gerer de gros projets inchallah la liste sera tres longue, alors comment faire ?? => tu vas declarer localement certain comonent, lequel ?? => ceux que tu utilises qu'une seule fois, par exemple ici c'est "TheHeader", "BadgeList" et "UserInfo" qui sont utiliser qu'une seule fois dans App.vue contrairement à "BaseBadge" qui lui est utilisé plusieurs fois donc tu peux le laisser dnas ton mainJS

import App from './App.vue';
//import TheHeader from './components/TheHeader.vue';
import BaseBadge from './components/BaseBadge.vue';
//import BadgeList from './components/BadgeList.vue';
//import UserInfo from './components/UserInfo.vue';

const app = createApp(App);

//app.component('the-header', TheHeader);
app.component('base-badge', BaseBadge);
//app.component('badge-list', BadgeList);
//app.component('user-info', UserInfo);

app.mount('#app');
