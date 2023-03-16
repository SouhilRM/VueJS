// ceci de base est là avec 'vue' sans chemin car vue est un package et nom un fichier
import { createApp } from 'vue';

//ceci on l'a rajouter 'App.vue' ici est un fichier donc tu dois spécifier le chemin
//le App ici est une convention aussi tu peux le nommé comme tu veux c'est juste our ne pas se perdre
import App from './App.vue';

//pour utiliser un compnent tu l'importe ici via le chemin : "./components/FriendContact.vue"
//le mot "FriendContact" aussi ici tu peux mettre ce que tu veux vue qu'on a exporter par defaut c'est juste une convention
import FriendContact from './components/FriendContact.vue';

import NewFriend from './components/NewFriend.vue';

//ici tu importe ton style via son chemin ez
import './assets/styles.css';

//le App ici c'est le meme que celui qu'on a importé
const app = createApp(App);

//le FriendContact ici c'est le meme que celui qu'on a importé pareil
//avec ici le "friend-contact" le nom de la balise html utilisée à l'interieure du template pour  pouvoir l'utiliser et il doit imperativement contenir de mot en minuscule et separer par le tiret du six -
app.component('friend-contact', FriendContact);
app.component('new-contact', NewFriend);

//le #app ici c'est celui de l'index.html
app.mount('#app');