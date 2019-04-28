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
    </div>
    <card class="card" v-show="showCard" @resp="showCard = false" />
    <div class="card" v-show="!showCard">
      <p class="dice" @click="roll(5)" v-html="face.face"></p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import card from "@/components/Card.vue";
import game from "@/game.ts";

@Component({
  components: {
    card
  }
})
export default class extends Vue {
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

  roll(acc: number) {
    game.old();

    this.face = this.diceFaces[Math.floor(Math.random() * 6)];

    setTimeout(() => {
      acc != 0 ? this.roll(acc - 1) : this.move(this.face.num);
    }, 100);
  }

  move(acc: number) {
    setTimeout(() => {
      if (acc != 0) {
        game.move(1);
        this.move(acc - 1);
      } else {
        game.draw();
        this.showCard = true;
      }
    }, 500);
  }
}
</script>

<style lang="scss">
Backward body {
  margin: 0;
  padding: 0;
}
.card {
  position: absolute;
  left: 42%;
  top: 30%;
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
