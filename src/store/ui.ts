import { defineStore } from "pinia";

interface UIState {
  theme: string;
  themes: string[];
  appDiv: HTMLElement | null;
}

export const useUiStore = defineStore("ui", {
  state: (): UIState => {
    return {
      theme: "light",
      themes: ["light", "dark", "starlight", "magnolia", "mint", "plum"],
      appDiv: null
    };
  },
  actions: {
    init({ enableKeypressHandler }: { enableKeypressHandler: boolean }) {
      this.appDiv = document.getElementById("app");

      // Set keyboard theme switching
      if (enableKeypressHandler) {
        document.addEventListener("keypress", (event: KeyboardEvent) => {
          if (event.key === "a") {
            this.prevTheme();
          } else if (event.key === "d") {
            this.nextTheme();
          }
        });
      }

      // Set theme from what was stored or from user preferences
      const storedTheme = localStorage.getItem("UiStore.theme");
      const { matchMedia } = window;

      if (storedTheme) {
        this.setTheme(storedTheme);
      } else if (matchMedia) {
        const isDark = matchMedia("(prefers-color-scheme: dark)").matches;
        const isLight = matchMedia("(prefers-color-scheme: light)").matches;

        if (isDark) {
          this.setTheme("dark");
        } else if (isLight) {
          this.setTheme("light");
        }
      }
    },
    setTheme(theme: string) {
      this.theme = theme;
      localStorage.setItem("UiStore.theme", theme);
      if (this.appDiv != null) {
        this.appDiv.className = theme;
      }
    },
    nextTheme() {
      const { theme, themes } = this;
      const themeIndex = themes.indexOf(theme);
      const nextTheme = themes[themeIndex + 1];

      if (nextTheme) {
        this.setTheme(nextTheme);
      } else {
        this.setTheme(themes[0]);
      }
    },
    prevTheme() {
      const { theme, themes } = this;
      const themeIndex = themes.indexOf(theme);
      const previousIndex = themeIndex - 1;

      if (previousIndex >= 0) {
        this.setTheme(themes[previousIndex]);
      } else {
        this.setTheme(themes[themes.length - 1]);
      }
    }
  }
});
