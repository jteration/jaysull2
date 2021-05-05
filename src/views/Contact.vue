<template>
	<section id="contact">
		<h1>{{ $t("pages.Contact.pageTitle") }}</h1>
		<label for="email">Email - </label>
		<a id="email" href="mailto:jay@jaysull.dev">jay@jaysull.dev</a>
		<br />
		<label for="linkedin">LinkedIn - </label>
		<a
			id="linkedin"
			href="https://www.linkedin.com/in/the-jay-sullivan/"
			rel="noopener noreferrer"
			target="_blank"
			>https://www.linkedin.com/in/the-jay-sullivan/</a
		>
		<br />
		<label for="github">Github - </label>
		<a
			id="github"
			href="https://github.com/jteration"
			rel="noopener noreferrer"
			target="_blank"
			>https://github.com/jteration</a
		>
	</section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "Contact"
});
</script>
