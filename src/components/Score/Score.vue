<template>
  <span
    v-if="gameStore.pixel.score > 0"
    aria-label="Score of hidden pixel game"
    >{{ gameStore.pixel.score }}</span
  >
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useGameStore } from "@/store/game";

export default defineComponent({
  name: "ScoreDisplay",
  setup() {
    const gameStore = useGameStore();
    return { gameStore };
  }
});
</script>
