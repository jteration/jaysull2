<template>
	<section id="contact">
		<h1>{{ $t("pages.Contact.pageTitle") }}</h1>
		<p>
			<label for="email">Email - </label>
			<a id="email" href="mailto:jay@jaysull.dev">jay@jaysull.dev</a>
		</p>
		<p>
			<label for="linkedin">LinkedIn - </label>
			<a
				id="linkedin"
				href="https://www.linkedin.com/in/the-jay-sullivan/"
				rel="noopener noreferrer"
				target="_blank"
				>https://www.linkedin.com/in/the-jay-sullivan/</a
			>
		</p>
		<p>
			<label for="github">Github - </label>
			<a
				id="github"
				href="https://github.com/jteration"
				rel="noopener noreferrer"
				target="_blank"
				>https://github.com/jteration</a
			>
		</p>
	</section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "Contact"
});
</script>
