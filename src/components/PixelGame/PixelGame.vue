<template>
  <div aria-hidden="true" class="pixel" :style="position" @click="handleClick">
    <div class="color" :style="backgroundColor" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { useGameStore } from "@/store/game";

export default defineComponent({
  name: "PixelGame",
  setup() {
    const gameStore = useGameStore();

    const X = ref(80);
    const Y = ref(80);
    const color = ref("123456");

    const backgroundColor = computed(() => {
      return `background-color: #${color.value};`;
    });

    const position = computed(() => {
      return `
				top: ${Y.value}px;
				left: ${X.value}px;
			`;
    });

    return { gameStore, X, Y, color, backgroundColor, position };
  },
  mounted() {
    this.randomizePosition();
  },
  methods: {
    isTextNode(X: number, Y: number): boolean {
      const elemAtDestination = document.elementFromPoint(X, Y);

      if (elemAtDestination) {
        if (elemAtDestination.nodeName === "#text") {
          return true;
        } else if (
          elemAtDestination.childNodes.length &&
          elemAtDestination.childNodes[0].nodeName === "#text"
        ) {
          return true;
        }

        return false;
      }

      return false;
    },
    randomizePosition(): void {
      const coords = { X: 0, Y: 0 };
      const borderSize = 80;
      const { clientHeight, clientWidth } = document.body;
      const bounds = {
        X: {
          min: borderSize,
          max: clientWidth - borderSize
        },
        Y: {
          min: borderSize,
          max: clientHeight - borderSize
        }
      };

      // If our bounds overlap due to small document size just set to borderSize
      if (bounds.X.min >= bounds.X.max || bounds.Y.min >= bounds.Y.max) {
        this.X = borderSize;
        this.Y = borderSize;
        return;
      }

      function getCoords() {
        coords.X = Math.floor(Math.random() * clientWidth);
        coords.Y = Math.floor(Math.random() * clientHeight);
        // Ensure X and Y are within 80 pixels of the viewport boundaries
        while (coords.X < bounds.X.min || coords.X > bounds.X.max) {
          coords.X = Math.floor(Math.random() * clientWidth);
        }

        while (coords.Y < bounds.Y.min || coords.Y > bounds.Y.max) {
          coords.Y = Math.floor(Math.random() * clientHeight);
        }
      }

      getCoords();

      while (this.isTextNode(coords.X, coords.Y)) {
        getCoords();
      }

      this.X = coords.X;
      this.Y = coords.Y;
      this.color = Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");
    },
    handleClick(): void {
      this.randomizePosition();
      this.gameStore.incrementPixel();
    }
  }
});
</script>

<style lang="scss">
.pixel {
  height: 1px;
  width: 1px;
  position: fixed;
  cursor: pointer;
  padding: 6px;
  transition: all 0.7s ease-in-out;

  .color {
    height: 3px;
    width: 3px;
  }
}
</style>
