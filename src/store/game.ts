import { defineStore } from "pinia";

export const useGameStore = defineStore("game", {
	state: () => {
		return { score: 0 };
	},
	actions: {
		increment() {
			this.score++;
		},
		clearScore() {
			this.score = 0;
		}
	}
});
