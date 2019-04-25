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
    <card />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import card from "@/components/Card.vue";
import game from "@/game";

@Component({
  components: {
    card
  }
})
export default class extends Vue {
  get pos() {
    return game.pos;
  }
}
</script>

<style lang="scss">
Backward body {
  margin: 0;
  padding: 0;
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
