<template>
	<Nav />
	<main>
		<router-view />
	</main>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore, ActionTypes } from "@/store";
import Nav from "@/components/Nav.vue";

export default defineComponent({
	name: "App",
	setup() {
		const store = useStore();
		store.dispatch(ActionTypes.UI.Init, { enableKeypressHandler: true });
		const theme = computed(() => store.state.ui.theme);

		return { theme };
	},
	components: {
		Nav
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
