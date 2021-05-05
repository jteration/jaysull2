<template>
	<section id="home">
		<p>{{ $t("pages.Home.welcome") }}</p>
	</section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "Home"
});
</script>
