<template>
  <section id="about">
    <h1>{{ $t("pages.About.pageTitle") }}</h1>
    <p>{{ $t("pages.About.firstParagraph") }}</p>
    <p>{{ $t("pages.About.secondParagraph") }}</p>
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
