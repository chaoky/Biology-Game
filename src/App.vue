<template>
  <div id="app">
    <div id="header"><h1>Glicokrebs</h1></div>
    <div id="menu" v-show="!game">
      <h3>Bien Venido</h3>
      <li>Clique no dado</li>
      <li>Acerte e fique</li>
      <li>Erre e volte</li>
      <p>>:3</p>

      <div><button @click="game = true">Starto!</button></div>
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
  display: flex;
  flex-direction: column;
  background: plum;
  margin: 20%;
  padding: 2em;

  button {
    margin: 1.5em;
    background: lightblue;
    padding: 1em 1em;
    border: solid salmon 3px;
    cursor: pointer;
  }
}
#app {
  background: lightblue;
  height: 100vh;
  display: grid;
  grid-gap: 5%;
}
#header {
  background: orange;
}
#footer {
  background: pink;
  font-size: 0.8em;
}
</style>
