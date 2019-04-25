<template>
  <div class="wrapper">
    <div class="title">
      <h6>{{ card.question }}</h6>
    </div>
    <div class="body">
      <div v-for="option in card.options" :key="option">
        <p id="1" @click="move(option)">{{ option }}</p>
      </div>
      <div class="resp">
        <img
          src="https://cdn.discordapp.com/attachments/158304994523611136/568879820323422208/Layer_2aaa.png"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";
import game from "@/game";
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
  position: absolute;
  box-shadow: 3px 4px;
  align-self: center;
  justify-self: center;
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  display: flex;
  flex-direction: column;
  border: 5px solid #acdeaa;
  border-radius: 5px;
  max-width: 200px;
}
.title {
  background-color: #8fbbaf;
}
.body {
  display: grid;
  grid-template-columns: 3fr 2fr;
  background-color: #d6f8b8;
}

p {
  cursor: pointer;
  font-size: 0.6em;
  color: #6b7b8e;
  padding: 0.1em 1.4em;
  font-family: "Permanent Marker", cursive;
}
h6 {
  font-family: "Fredoka One", cursive;
  font-weight: normal;
  padding: 1em;
  color: #6b7b8e;
}
img {
  height: auto;
  width: 78%;
}
.resp {
  align-self: center;
}
</style>
