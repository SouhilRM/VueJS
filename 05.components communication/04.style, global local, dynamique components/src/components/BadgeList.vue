<template>
  <section>
    <h2>Available Badges</h2>
    <ul>

      <li>
        <base-badge type="admin" caption="ADMIN"></base-badge>
      </li>

      <li>
        <base-badge type="author" caption="AUTHOR"></base-badge>
      </li>

      <!-- le "ref" ici sert à recuperer la valeur de notre input; on pouvait utiliser v-model comme d'hab mais ca aussi c'est juste -->
      <input type="text" ref="goal">

      <button @click="setGoal">GO</button>

      <!-- le "teleportto" permet de choisir ou sera implémenter ton component au niveau du DOM; si tu ne le met ca marchera mais sémentiquement ca sera pas opti car vaut mieux le mettra à la fin du "body" grace à l'attribut "to=" surtt si c'est juste un component de type "slot" qui sert qu'a faire du style -->
      <Teleport to="body">
        <error-alert v-if="inputIsInvalid">
        <h2>Input is invalid!</h2>
        <p>Please enter at least a few characters...</p>
        <button @click="resetGoal">Okay</button>
        </error-alert>
      </Teleport>

    </ul>
    
  </section>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue';
  export default{
    components: {
      ErrorAlert
    },
    data() {
      return {
        inputIsInvalid: false
      };
    },
    methods:{

      //cette methode va nous servir à savoir si notre input est vide ou non
      setGoal(){

        //la valeur est récuperée via le 'ref' en haut
        const enteredValue = this.$refs.goal.value

        if(enteredValue === ''){
          this.inputIsInvalid = true;
        }
      },
      resetGoal(){
        this.inputIsInvalid = false;
      }
    }
  }
</script>

<style scoped>
  section {
    margin: 2rem auto;
    max-width: 30rem;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
  }
  section h2 {
    margin: 0.5rem 0;
    color: #3a3a3a;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
  }

  li {
    margin-right: 1rem;
  }
</style>