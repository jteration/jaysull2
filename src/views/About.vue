<template>
	<section id="about">
		<h1>{{ $t("pages.About.pageTitle") }}</h1>
		<p>{{ $t("pages.About.firstParagraph") }}</p>
		<p>
			{{ $t("pages.About.secondParagraph") }}
			<cite>{{ $t("pages.About.bookTitle") }}</cite>
			{{ $t("pages.About.bookAuthors") }}
			{{ $t("pages.About.secondParagraphCont") }}
		</p>
		<p>{{ $t("pages.About.thirdParagraph") }}</p>
		<p>{{ $t("pages.About.fourthParagraph") }}</p>
	</section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "AboutPage"
});
</script>
