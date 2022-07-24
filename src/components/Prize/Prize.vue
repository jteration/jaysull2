<template>
  <span v-if="showPrize" role="img" :aria-label="$t('components.Prize.prizeLabel')">{{ prize }}</span>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useGameStore } from "@/store/game";

export default defineComponent({
  name: "PrizeDisplay",
  setup() {
    const gameStore = useGameStore();
    const score = computed(() => gameStore.pixel.score);
    const showPrize = computed(() => score.value >= 5);
    const prize = computed(() => {
      const { value } = score;

      if (value <= 10) {
        return "👍";
      } else if (value <= 20) {
        return "😂";
      } else if (value <= 30) {
        return "🔥";
      } else if (value <= 40) {
        return "✨";
      } else if (value <= 999) {
        return "💯";
      }

      return "💩";
    });

    return { showPrize, prize };
  }
});
</script>
