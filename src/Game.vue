<template>
  <div id="game">
    <div id="board">
      <img id="Places" src="@/assets/tabuleiro.png" />
      <img
        id="token"
        class="vert-move"
        src="@/assets/bigyoshi.png"
        :style="{ top: pos.top, left: pos.left }"
      />
      <div class="card" v-show="showCard">
        <div id="card">
          <div class="title">
            <h6>{{ card.question }}</h6>
          </div>
          <div class="body">
            <p
              v-for="option in card.options"
              :key="option"
              @click="resp(option)"
            >
              {{ option }}
            </p>
          </div>
        </div>
      </div>
      <button
        v-show="showDice"
        class="dice-bg"
        @click="roll(5)"
        :disabled="!enableDice"
      >
        <h4>MOVE</h4>
        <p class="dice" v-html="face.face"></p>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import card from "@/components/Card.vue";
import game from "@/game.ts";

const right = new Audio(require("@/assets/right.wav"));
const wrong = new Audio(require("@/assets/wrong.wav"));
const dice = new Audio(require("@/assets/dice.wav"));

right.volume = 0.4;
wrong.volume = 0.4;
dice.volume = 0.3;

const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

@Component
export default class extends Vue {
  showDice: boolean = true;
  oldPos: number = 0;
  enableDice: boolean = true;
  showCard: boolean = false;

  diceFaces = [
    { num: 1, face: "&#9856;" },
    { num: 2, face: "&#9857;" },
    { num: 3, face: "&#9858;" },
    { num: 4, face: "&#9859;" },
    { num: 5, face: "&#9860;" },
    { num: 6, face: "&#9861;" }
  ];
  face = { num: 1, face: "&#9856;" };

  get pos() {
    return game.pos;
  }

  get card() {
    return game.card;
  }

  async resp(awnser: string | boolean) {
    if (this.card.answer == awnser) {
      right.play();
      this.oldPos = this.card.prize;
      this.showCard = false;
      await game.move({ amount: this.card.prize, direction: 1 });
      if (this.card.prize == 0) {
        this.showDice = true;
        this.showCard = false;
      } else {
        this.showDice = false;
        this.showCard = true;
        game.setCard();
      }
    } else {
      wrong.play();
      this.showCard = false;
      await game.move({ amount: this.oldPos, direction: -1 });
      this.showDice = true;
    }
  }

  async roll(acc: number) {
    this.enableDice = false;
    for (let i = acc; i > 0; i--) {
      let rand = Math.round(Math.random() * 5);
      if (this.diceFaces[rand] == this.face) rand++;
      dice.play();
      this.face = this.diceFaces[rand];
      await sleep(300);
    }
    this.oldPos = this.face.num;
    this.showDice = false;
    this.enableDice = true;

    if ((await game.move({ amount: this.face.num, direction: 1 })) == 0) {
      game.setCard();
      this.showCard = true;
    }
  }
}
</script>

<style lang="scss">
@import "https://fonts.googleapis.com/css?family=Permanent+Marker";

#card {
  box-shadow: 2px 5px;
  border: 5px solid #acdeaa;
  border-radius: 5px;
  width: 200px;
  .title {
    background-color: #8fbbaf;
    height: 150px;
    display: grid;

    h6 {
      font-family: "Fredoka One", cursive;
      font-weight: normal;
      padding: 1.3em;
      color: #6b7b8e;
      align-self: center;
    }
  }
  .body {
    height: 200px;
    display: flex;
    flex-direction: column;
    background-color: #d6f8b8;
    cursor: pointer;

    p {
      height: 100%;
      margin: 0;
      font-size: 0.6em;
      color: #6b7b8e;
      padding: 1.3em;
      font-family: "Permanent Marker", cursive;
      &:hover {
        background: white;
      }
    }
  }
}
Backward body {
  margin: 0;
  padding: 0;
}
.card {
  position: absolute;
  left: 1%;
  top: 15%;
}

.dice-bg {
  cursor: pointer;
  padding: 0;
  border: solid wheat 3px;
  position: absolute;
  left: 30%;
  bottom: 10%;
  background: plum;
  width: 40%;
  .dice {
    margin: 0;
    font-size: 7em;
    background: none;
    border: none;
    text-decoration: none;
  }
  h4 {
    padding-top: 1em;
    margin: 0;
  }
}
#game {
  display: flex;
  align-items: center;
  justify-content: center;
}
#board {
  position: relative;
}
#Places {
  width: 100%;
  max-height: 70vh;
}
#token {
  position: absolute;
  width: 10%;
  top: 86%;
  left: 4%;
}

img.vert-move {
  -webkit-animation: mover 0.1s infinite alternate;
  animation: mover 0.1s infinite alternate;
}
img.vert-move {
  -webkit-animation: mover 0.1s infinite alternate;
  animation: mover 0.1s infinite alternate;
}
@-webkit-keyframes mover {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-30px);
  }
}
@keyframes mover {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-30px);
  }
}
</style>
