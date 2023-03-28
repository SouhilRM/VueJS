<template>
    <base-card>
        <base-button @click="setSelectedTab('stored-ressources')" :mode="storedResourcesButtonMode">
            Stored Ressources
        </base-button>

        <base-button @click="setSelectedTab('add-ressource')" :mode="AddRessourceButtonMode">
            Add ressources
        </base-button>
    </base-card>
    
    <!-- au lieu d'utiliser les provide-inject tu aurai aussi pu garder les props et les passer avec l'attribut comonent comme on a vu dans formaionJs=>05.components communication=>04.style, global local, dynamique components -->
    <KeepAlive>
        <component :is="selectedTab"></component>
    </KeepAlive>
</template>

<script>
import StoredRessources from './StoredRessources.vue'
import AddRessource from './AddRessource.vue'

export default{

    components:{
        StoredRessources,
        AddRessource
    },
    data(){
        return{
            selectedTab: 'stored-ressources',
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
            ],
        }
    },
    provide() {
        return {
            ressources: this.storedResources,
            addRessource: this.addRessource,
            removeRessource: this.removeRessource,
        };
    },
    methods:{
        setSelectedTab(tab){
            this.selectedTab = tab
        },
        addRessource(title, description, url){
            const newRessource = {
                id: new Date().toISOString(),
                title: title,
                description: description,
                link: url
            }
            //unshift c'est comme push mais il va l'ajouter au debut
            this.storedResources.unshift(newRessource)
            //pour switch vers les ressources et voir ce qu'on a ajouter
            this.selectedTab = 'stored-ressources'
        },
        removeRessource(resId){
            const resIndex = this.storedResources.findIndex(res=>res.id === resId)
            this.storedResources.splice(resIndex, 1)
        }
    },
    computed:{
        storedResourcesButtonMode(){
            return this.selectedTab === 'stored-ressources' ? null : 'flat'
        },
        AddRessourceButtonMode(){
            return this.selectedTab === 'add-ressource' ? null : 'flat'
        }
    }
}
</script>