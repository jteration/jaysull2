<template>
	<nav>
		<div class="links">
			<router-link to="/">{{ $t("pages.Home.pageTitle") }}</router-link>
			<router-link to="/about">{{ $t("pages.About.pageTitle") }}</router-link>
			<router-link to="/experience">{{
				$t("pages.Experience.pageTitle")
			}}</router-link>
			<router-link to="/contact">{{
				$t("pages.Contact.pageTitle")
			}}</router-link>
			<router-link to="/things">{{ $t("pages.Things.pageTitle") }}</router-link>
			<Score />
		</div>
		<div class="controls">
			<LocalePicker />
		</div>
	</nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Score from "@/components/Score/Score.vue";
import LocalePicker from "@/components/LocalePicker/LocalePicker.vue";

export default defineComponent({
	name: "Nav",
	setup() {
		return {};
	},
	components: {
		Score,
		LocalePicker
	}
});
</script>

<style lang="scss">
nav {
	height: 66px;
	padding: 0 22px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-shrink: 0;
	flex-wrap: wrap;

	.links {
		padding: 6px 0;
		> * {
			padding: 0 6px;
		}
	}

	.controls {
		padding: 6px 0;
		display: flex;

		> div {
			padding: 0 6px;
		}
	}
}
</style>
