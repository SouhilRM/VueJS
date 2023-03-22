<template>
    <!-- l'attribut 'open' est tres impoortant ici sinon ton alert ne s'affichera pas; on aurai pu toogle cet attribut avec le v-bind pour le montrer cacher mais avec cette logique qu'on a écrut c'est mieux car on supprime le comonent completement apres avoir clické sur la croix -->
    <dialog open>
        <slot></slot>
    </dialog>
</template>

<style scoped>
    dialog {
    margin: 0;
    position: fixed;
    top: 20vh;
    left: 30%;
    width: 40%;
    background-color: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    }
</style>