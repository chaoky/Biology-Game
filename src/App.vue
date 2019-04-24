<template>
  <div id="app">
    <div id="header"><h1>Jogo de Biologia??</h1></div>
    <game />
    <div id="footer">
      <p>Made with by 💕 lordie</p>
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
export default class extends Vue {}
</script>

<style lang="scss">
body,
html {
  margin: 0;
  text-align: center;
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
