<template>
  <div id="app">
    <div id="header"><h1>Glicokrebs</h1></div>
    <div id="menu" v-show="!game">
      <h3>Bien Venido</h3>
      <li>Play the die</li>
      <li>Get the questions right to keep your movement</li>
      <li>loose and go back</li>
      <button @click="game = true">Starto!</button>
    </div>
    <game v-show="game" />
    <div id="footer">
      <p>Made with 💕 by lordie</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import game from "./Game.vue";

@Component({
  components: {
    game
  }
})
export default class extends Vue {
  game = false;
}
</script>

<style lang="scss">
body,
html {
  margin: 0;
  text-align: center;
}
#menu {
  background: plum;
  margin: 1em;
  padding: 2em;

  button {
    background: lightblue;
    margin: 3em 30%;
    border: solid salmon 3px;
    cursor: pointer;
  }
}
#app {
  background: lightblue;
  height: 100vh;
  display: grid;
  grid-gap: 5%;
  grid-template-rows: 0.3fr auto 0.1fr;
}
#header {
  background: orange;
}
#footer {
  background: pink;
  font-size: 0.8em;
}
</style>
