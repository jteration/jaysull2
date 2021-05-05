<template>
	<span v-if="showScore" aria-label="Score of hidden pixel game">{{
		score
	}}</span>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "@/store";

export default defineComponent({
	name: "Score",
	setup() {
		const store = useStore();
		const score = computed(() => store.state.game.score);
		const showScore = computed(() => score.value > 0);

		return { score, showScore };
	}
});
</script>
