<template>
  <div class="wrapper">
    <div class="title">
      <h6>{{ card.question }}</h6>
    </div>
    <div class="body">
      <p v-for="option in card.options" :key="option" @click="move(option)">
        {{ option }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";
import game from "@/game.ts";
import { Mutation } from "vuex-module-decorators";

@Component
export default class extends Vue {
  get card() {
    return game.card;
  }

  move(awnser: string | boolean) {
    if (game.card.answer == awnser) {
      game.move(game.card.prize);
    } else {
      game.move(-1);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "https://fonts.googleapis.com/css?family=Permanent+Marker";
@import "https://fonts.googleapis.com/css?family=Fredoka+One";

.wrapper {
  box-shadow: 2px 5px;
  border: 5px solid #acdeaa;
  border-radius: 5px;
  width: 200px;
}
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
</style>
