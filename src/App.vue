<template>
  <div id="app">
    <div id="header"><h1>Glicokrebs</h1></div>
    <div id="menu" v-show="!game">
      <h3>Olá</h3>
      <li>Para iniciar o jogo, clique no dado.</li>
      <li>
        O personagem andará a quantidades de casas no dado, a pergunta
        selecionada será de acordo com a casa do tabuleiro.
      </li>
      <li>
        Se acertar a pergunta, se manterá na mesma casa e terá a chance de jogar
        o dado novamente.
      </li>
      <li>O jogo acaba quando se chega ao fim do tabuleiro.</li>

      <div><button @click="game = true">Starto!</button></div>
    </div>
    <div v-show="win" class="win">
      <h3>WIN!!!!!!!!!!!!!!!!!!!!!</h3>
      <img src="@/assets/bunny.png" />
      <button @click="game = false">Jogar dinovo</button>
    </div>
    <div v-show="!win"></div>
    <game v-show="game" />

    <div id="footer">
      <p>Made with 💕 by lordie</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import gameState from "@/game.ts";

import game from "./Game.vue";

@Component({
  components: {
    game
  }
})
export default class extends Vue {
  game = false;

  get win() {
    return gameState.win;
  }
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

.win {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 30%;
  left: 30%;
  z-index: 9999;
  width: 40%;
  height: 40%;
  background: plum;
  padding: 0;
  margin: 0;

  button {
    padding: 0;
    margin: 0;
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
