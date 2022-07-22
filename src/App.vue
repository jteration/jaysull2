<template>
  <NavBar />
  <main>
    <router-view />
    <PixelGame />
  </main>
  <FootBar />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useUiStore } from "@/store/ui";
import NavBar from "@/components/NavBar/NavBar.vue";
import PixelGame from "@/components/PixelGame/PixelGame.vue";
import FootBar from "@/components/FootBar/FootBar.vue";

export default defineComponent({
  name: "App",
  setup() {
    const uiStore = useUiStore();
    uiStore.init({ enableKeypressHandler: true });

    return {};
  },
  components: {
    NavBar,
    PixelGame,
    FootBar
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
