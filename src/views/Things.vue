<template>
  <section id="things">
    <h1>{{ $t("pages.Things.pageTitle") }}</h1>
    <p>
      {{ $t("pages.Things.thisWebsite") }}
    </p>
    <p class="indented">
      - {{ $t("pages.Things.code") }}
      <a
        href="https://github.com/jteration/jaysull2"
        rel="noopener noreferrer"
        target="_blank"
        >https://github.com/jteration/jaysull2</a
      >
    </p>
    <p class="indented">
      - {{ $t("pages.Things.hosted") }}
      <a
        href="https://www.jaysull.dev/"
        rel="noopener noreferrer"
        target="_blank"
        >https://www.jaysull.dev/</a
      >
    </p>
    <p>
      {{ $t("pages.Things.JSONParser") }}
    </p>
    <p class="indented">
      - {{ $t("pages.Things.code") }}
      <a
        href="https://github.com/jteration/rs_json"
        rel="noopener noreferrer"
        target="_blank"
        >https://github.com/jteration/rs_json</a
      >
    </p>
    <p>
      {{ $t("pages.Things.HTTPParser") }}
    </p>
    <p class="indented">
      - {{ $t("pages.Things.code") }}
      <a
        href="https://github.com/jteration/rs_http"
        rel="noopener noreferrer"
        target="_blank"
        >https://github.com/jteration/rs_http</a
      >
    </p>
    <p>
      {{ $t("pages.Things.cityBlock") }}
    </p>
    <p class="indented">
      - {{ $t("pages.Things.code") }}
      <a
        href="https://github.com/jteration/city-block"
        rel="noopener noreferrer"
        target="_blank"
        >https://github.com/jteration/city-block</a
      >
    </p>
    <p class="indented">
      - {{ $t("pages.Things.hosted") }}
      <a
        href="https://jteration.github.io/city-block"
        rel="noopener noreferrer"
        target="_blank"
        >https://jteration.github.io/city-block</a
      >
    </p>
    <p>
      {{ $t("pages.Things.capsacinClicker") }}
    </p>
    <p class="indented">
      - {{ $t("pages.Things.code") }}
      <a
        href="https://github.com/jteration/capsaicin-clicker"
        rel="noopener noreferrer"
        target="_blank"
        >https://github.com/jteration/capsaicin-clicker</a
      >
    </p>
    <p class="indented">
      - {{ $t("pages.Things.hosted") }}
      <a
        href="https://jteration.github.io/capsaicin-clicker"
        rel="noopener noreferrer"
        target="_blank"
        >https://jteration.github.io/capsaicin-clicker</a
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

<style lang="scss">
.indented {
  margin-left: 16px;
}
</style>
