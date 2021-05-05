<template>
	<Nav />
	<main>
		<router-view />
		<PixelGame />
	</main>
	<Footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore, ActionTypes } from "@/store";
import Nav from "@/components/Nav/Nav.vue";
import PixelGame from "@/components/PixelGame/PixelGame.vue";
import Footer from "@/components/Footer/Footer.vue";

export default defineComponent({
	name: "App",
	setup() {
		const store = useStore();
		// Init UI module
		store.dispatch(ActionTypes.UI.Init, { enableKeypressHandler: true });

		return {};
	},
	components: {
		Nav,
		PixelGame,
		Footer
	}
});
</script>

<style lang="scss">
@import "themes.scss";

#app {
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	transition: all 0.2s ease;

	main {
		height: 100%;
		padding: 10px 40px;
		display: flex;
		align-items: safe center;
		justify-content: safe center;
		overflow-y: auto;

		section {
			max-width: clamp(420px, 600px, 800px);
		}
	}
}
</style>
