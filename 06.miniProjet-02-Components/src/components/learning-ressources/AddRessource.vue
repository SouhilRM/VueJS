<template>
    <base-dialogue v-if="inputIsInvalid" title="invalid input" @close="closeModel">
        <template #default>
            <p>L'un de vos inputs est vide.</p>
            <p>Veillez reassayez ultérieurement.</p>
        </template>
        <template #actions>
            <base-button @click="closeModel">Okay</base-button>
        </template>
    </base-dialogue>
    <base-card>
        <form @submit.prevent="submitData">
            <div class="form-control">
                <label for="title">Title</label>
                <input id="title" name="title" type="text" ref="titleInput" />
            </div>
            <div class="form-control">
                <label for="description">Description</label>
                <textarea id="description" name="description" rows="3" ref="descriptionInput"></textarea>
            </div>
            <div class="form-control">
                <label for="link">Link</label>
                <input id="link" name="link" type="url" ref="linkInput"/>
            </div>
            <div>
                <base-button type="submit">Add Ressource</base-button>
            </div>
        </form>
    </base-card>
</template>

<script>
export default{
    data(){
        return{
            inputIsInvalid: false,
        }
    },
    methods:{
        submitData(){
            const enteredTitle = this.$refs.titleInput.value
            const enteredDescription = this.$refs.descriptionInput.value
            const enteredLink = this.$refs.linkInput.value

            //la methode trim() permet d'éliminer les espace et les tabulation dans une chaine de characteres vide
            if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredLink === '') {
                this.inputIsInvalid = true
            }

            this.addRessource(enteredTitle, enteredDescription, enteredLink)
        },
        closeModel(){
            this.inputIsInvalid = false
        }
    },
    inject:['addRessource']
}
</script>

<style scoped>
    label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    }

    input,
    textarea {
    display: block;
    width: 100%;
    font: inherit;
    padding: 0.15rem;
    border: 1px solid #ccc;
    }

    input:focus,
    textarea:focus {
    outline: none;
    border-color: #3a0061;
    background-color: #f7ebff;
    }

    .form-control {
    margin: 1rem 0;
}
</style>