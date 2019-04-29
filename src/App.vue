<template>
  <div id="app">
    <div id="header"><h1>Glicokrebs</h1></div>
    <div class="main">
      <div id="menu" v-show="!game">
        <h3>Olá</h3>
        <li>Para iniciar o jogo, clique no dado.</li>
        <li>
          O personagem andará a quantidades de casas no dado, a pergunta
          selecionada será de acordo com a casa do tabuleiro.
        </li>
        <li>
          Se acertar a pergunta, se manterá na mesma casa e terá a chance de
          jogar o dado novamente.
        </li>
        <li>O jogo acaba quando se chega ao fim do tabuleiro.</li>

        <div><button @click="start()">Começar!</button></div>
      </div>
      <div v-show="win" class="win">
        <h3>!VICTORY</h3>
        <img src="@/assets/bunny.png" />
        <button @click="reload()">Jogar novamente</button>
      </div>
      <div v-show="!win"></div>
      <game v-show="game" />
    </div>
    <div id="footer">
      <p>Made with 💕 by lordie</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import gameState from "@/game.ts";

const bg = new Audio(require("@/assets/bg.ogg"));
const click = new Audio(require("@/assets/click.wav"));

import game from "./Game.vue";

@Component({
  components: {
    game
  }
})
export default class extends Vue {
  game = false;

  mounted() {
    bg.volume = 0.1;
    bg.autoplay;
    bg.play();
  }

  get win() {
    return gameState.win;
  }

  start() {
    click.play();
    this.game = true;
  }

  reload() {
    click.play();
    window.location.reload();
  }
}
</script>

<style lang="scss">
@import "https://fonts.googleapis.com/css?family=Fredoka+One";

body,
html {
  * {
    font-family: "Fredoka One", cursive;
  }
  margin: 0;
  text-align: center;
}

#menu {
  display: flex;
  flex-direction: column;
  background: plum;
  max-height: 400px;
  max-width: 500px;
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
  position: absolute;
  top: 30%;
  left: 30%;
  z-index: 999;
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
  justify-items: center;
  align-content: center;
  grid-template-rows: 2fr 10fr 1fr;
}
#header {
  background: orange;
  width: 100%;
}
#footer {
  background: pink;
  font-size: 0.8em;
  width: 100%;
}
</style>
