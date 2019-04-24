<template>
  <div></div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";
import { mapGetters, mapMutations } from "vuex-typesafe-class";

import Store from "@/store";

@Component({
  computed: {
    ...mapGetters(Store, {
      pos: "pos"
    })
  }
})
export default class extends Vue {
  @Prop(String) title!: string;
}
</script>
