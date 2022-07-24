import { defineStore } from "pinia";

type GameStoreState = {
  pixel: {
    score: number;
  };
  typing: {
    score: number;
    isActive: boolean;
    interval: number | null;
    countDown: number;
    letterSequence: string;
    currentLetterIndex: number;
    loaderIndex: number;
    loader: Array<string>;
  };
};

export const useGameStore = defineStore("game", {
  state: (): GameStoreState => {
    return {
      pixel: {
        score: 0
      },
      typing: {
        score: 0,
        isActive: false,
        interval: null,
        countDown: 9,
        letterSequence: "abcdefghi",
        currentLetterIndex: 0,
        loaderIndex: 0,
        loader: ["|", "/", "-", "\\"]
      }
    };
  },
  actions: {
    resetTitle() {
      document.title = `J ${this.typing.score}`;
    },
    setTitle() {
      const { letterSequence, currentLetterIndex, countDown, loaderIndex, loader } = this.typing;
      // "abc-----:8|"
      document.title = `${letterSequence.slice(0, currentLetterIndex + 1)}${"-".repeat(
        letterSequence.length - currentLetterIndex - 1
      )} : ${Math.floor(countDown)} ${loader[loaderIndex]}`;
    },
    initTypingGame() {
      if (this.typing.isActive) return;
      this.typing.isActive = true;

      this.typing.currentLetterIndex = 0;
      this.typing.countDown = 9;
      this.typing.letterSequence = "";
      for (let i = 0; i < 5; i += 1) {
        this.typing.letterSequence += String.fromCharCode(Math.floor(Math.random() * 26 + 97));
      }
      this.setTitle();
      document.addEventListener("keyup", this.keyPressListener);
      this.typing.interval = setInterval(this.typingInterval, 250);
    },
    keyPressListener(event: KeyboardEvent) {
      const key = event.key;
      const currentChar = this.typing.letterSequence[this.typing.currentLetterIndex];
      if (key === currentChar) {
        this.typing.currentLetterIndex++;
        if (this.typing.currentLetterIndex < this.typing.letterSequence.length) {
          this.setTitle();
        } else {
          // Game is won
          switch (this.typing.countDown) {
            case 9: {
              this.typing.score += 36;
              break;
            }
            case 8: {
              this.typing.score += 24;
              break;
            }
            case 7: {
              this.typing.score += 14;
              break;
            }
            default: {
              this.typing.score += Math.floor(this.typing.countDown);
            }
          }

          this.endTypingGame();
        }
      }
    },
    endTypingGame() {
      this.resetTitle();

      if (this.typing.interval != null) {
        clearInterval(this.typing.interval);
      }

      document.removeEventListener("keyup", this.keyPressListener);
      this.typing.isActive = false;
    },
    typingInterval() {
      this.typing.countDown -= 0.25;
      this.typing.loaderIndex = this.typing.loaderIndex < 3 ? this.typing.loaderIndex + 1 : 0;

      if (this.typing.countDown < 0) {
        this.endTypingGame();
      } else {
        this.setTitle();
      }
    },
    incrementPixel() {
      this.pixel.score++;

      if (this.pixel.score > 10 && !this.typing.isActive) {
        this.initTypingGame();
      }
    },
    increaseTypingScore(amount: number) {
      this.typing.score += amount;
    },
    clearScore() {
      this.pixel.score = 0;
      this.typing.score = 0;
    }
  }
});
