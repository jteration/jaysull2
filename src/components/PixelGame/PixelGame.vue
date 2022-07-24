<template>
  <div aria-hidden="true" class="pixel" :style="position" @click="handleClick">
    <div class="color" :style="backgroundColor"></div>
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
      const elementAtCoords = document.elementFromPoint(X, Y);
      if (elementAtCoords == null) return false;
      const { nodeName, childNodes } = elementAtCoords;

      if (
        nodeName === "#text" ||
        (childNodes.length && childNodes[0].nodeName === "#text")
      ) {
        return true;
      }

      return false;
    },
    randomizePosition(): void {
      const { clientHeight, clientWidth } = document.body;
      const coords = { X: 0, Y: 0 };
      const borderSize = 40;
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
        coords.X = Math.random() * clientWidth;
        coords.Y = Math.random() * clientHeight;

        const halfWidth = clientWidth / 2;
        const halfHeight = clientHeight / 2;

        // Shift coordinates so they are inside of the "border"
        // eslint-disable-next-line
        coords.X = coords.X < halfWidth
            ? coords.X + borderSize * (1 - coords.X / halfWidth)
            : coords.X - borderSize * ((coords.X - halfWidth) / halfWidth);
        // eslint-disable-next-line
        coords.Y = coords.Y < halfHeight
            ? coords.Y + borderSize * (1 - coords.Y / halfHeight)
            : coords.Y - borderSize * ((coords.Y - halfHeight) / halfHeight);

        coords.X = Math.floor(coords.X);
        coords.Y = Math.floor(coords.Y);
      }

      getCoords();

      // Ensure the pixel isn't directly overlapping some text
      let limit = 10;
      while (this.isTextNode(coords.X, coords.Y) && limit > 0) {
        limit--;
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
