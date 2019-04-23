<template>
  <div id="app">
    <div id="board">
      <img id="map" src="@/assets/tabuleiro.png" />
      <img
        id="token"
        class="vert-move"
        ref="token"
        src="@/assets/bigyoshi.png"
      />
    </div>
    <button @click="move(1)">Forward</button>
    <button @click="move(-1)">Backward</button>
    <button @click="move(2)">Forward 2</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

interface Map {
  event: string;
  top: string;
  left: string;
}

@Component
export default class extends Vue {
  map: Array<Map> = [
    {
      event: "win",
      top: "86%",
      left: "4%"
    },
    {
      event: "red",
      top: "86%",
      left: "20%"
    },
    {
      event: "green",
      top: "86%",
      left: "36%"
    },
    {
      event: "yellow",
      top: "86%",
      left: "53%"
    },
    {
      event: "omega green",
      top: "86%",
      left: "4%"
    },
    {
      event: "red",
      top: "86%",
      left: "4%"
    },
    {
      event: "green",
      top: "86%",
      left: "4%"
    },
    {
      event: "red",
      top: "86%",
      left: "4%"
    },
    {
      event: "red",
      top: "86%",
      left: "4%"
    },
    {
      event: "omega yellow",
      top: "86%",
      left: "4%"
    },
    {
      event: "green",
      top: "86%",
      left: "4%"
    },
    {
      event: "yellow",
      top: "86%",
      left: "4%"
    },
    {
      event: "red",
      top: "86%",
      left: "4%"
    },
    {
      event: "yellow",
      top: "86%",
      left: "4%"
    },
    {
      event: "red",
      top: "86%",
      left: "4%"
    },
    {
      event: "omega yellow",
      top: "86%",
      left: "4%"
    },
    {
      event: "green",
      top: "86%",
      left: "4%"
    },
    {
      event: "red",
      top: "86%",
      left: "4%"
    },
    {
      event: "yellow",
      top: "86%",
      left: "4%"
    },
    {
      event: "omega green",
      top: "86%",
      left: "4%"
    },
    {
      event: "red",
      top: "86%",
      left: "4%"
    }
  ];
  pos = 0;

  move(ammount: number) {
    let token = this.$refs.token as HTMLImageElement;
    const pos = this.pos + ammount;

    token.style.left = this.map[pos].left;
    token.style.top = this.map[pos].top;

    this.event(this.map[pos]);
    this.pos = pos;
  }
  event({ event }: Map) {
    console.log({ event });
  }
}
</script>

<style lang="scss">
Backward body {
  margin: 0;
  padding: 0;
}
#app {
  display: flex;
  align-items: center;
  justify-content: center;
}
#board {
  position: relative;
}
#map {
  width: 100%;
  max-height: 99vh;
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
