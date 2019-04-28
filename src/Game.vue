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
      <div class="dice-bg" v-show="showDice" @click="roll(5)">
        <h4>MOVE</h4>
        <p class="dice" v-html="face.face"></p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import card from "@/components/Card.vue";
import game from "@/game.ts";

@Component
export default class extends Vue {
  showCard: boolean = false;
  showDice: boolean = true;
  oldPos: number = 0;

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

  resp(awnser: string | boolean) {
    this.showCard = false;
    this.card.answer == awnser
      ? this.fuckMove(game.card.prize)
      : this.moveBack(this.oldPos);
  }

  fuckMove(acc: number) {
    if (acc != 0) {
      this.oldPos = acc;
      this.move(acc);
    } else {
      this.showDice = true;
    }
  }

  preMove(acc: number) {
    this.oldPos = acc;
    setTimeout(() => (this.showDice = false), 600);
    this.move(acc);
  }

  roll(acc: number) {
    this.face = this.diceFaces[Math.floor(Math.random() * 6)];
    setTimeout(() => {
      acc != 0 ? this.roll(acc - 1) : this.preMove(this.face.num);
    }, 200);
  }

  move(acc: number) {
    setTimeout(() => {
      if (acc != 0) {
        game.move(1);
        game.move(0);
        this.move(acc - 1);
      } else {
        game.draw();
        this.showCard = true;
      }
    }, 400);
  }
  moveBack(acc: number) {
    this.showDice = false;
    setTimeout(() => {
      if (acc != 0) {
        game.move(-1);
        this.moveBack(acc - 1);
      } else {
        this.showDice = true;
      }
    }, 400);
  }
}
</script>

<style lang="scss">
@import "https://fonts.googleapis.com/css?family=Permanent+Marker";
@import "https://fonts.googleapis.com/css?family=Fredoka+One";

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
.dice {
  margin: 0;
  padding: 0;
  font-size: 5em;
}
.dice-bg {
  cursor: pointer;
  border: solid wheat 3px;
  position: absolute;
  left: 30%;
  bottom: 10%;
  background: plum;
  width: 40%;
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
