<template>
	<span v-if="gameStore.score > 0" aria-label="Score of hidden pixel game">{{
		gameStore.score
	}}</span>
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
