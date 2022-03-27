<template>
	<section id="things">
		<h1>{{ $t("pages.Things.pageTitle") }}</h1>
		<p>
			{{ $t("pages.Things.codeForThisWebsite") }} -
			<a
				href="https://github.com/jteration/jaysull2"
				rel="noopener noreferrer"
				target="_blank"
				>https://github.com/jteration/jaysull2</a
			>
		</p>
		<p>
			{{ $t("pages.Things.JSONParser") }} -
			<a
				href="https://github.com/jteration/rs_json"
				rel="noopener noreferrer"
				target="_blank"
				>https://github.com/jteration/rs_json</a
			>
		</p>
		<p>
			{{ $t("pages.Things.HTTPParser") }} -
			<a
				href="https://github.com/jteration/rs_http"
				rel="noopener noreferrer"
				target="_blank"
				>https://github.com/jteration/rs_http</a
			>
		</p>
	</section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "ThingsPage"
});
</script>
