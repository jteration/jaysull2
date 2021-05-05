<template>
	<span
		v-if="showPrize"
		role="img"
		:aria-label="$t('components.Prize.prizeLabel')"
		>{{ prize }}</span
	>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "@/store";

export default defineComponent({
	name: "Prize",
	setup() {
		const store = useStore();
		const score = computed(() => store.state.game.score);
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
