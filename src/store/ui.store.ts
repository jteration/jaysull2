import { Module, MutationTree, ActionContext, ActionTree } from "vuex";
import { State as RootState } from "./";

type Theme = string;
type Themes = string[];
type AppDiv = HTMLElement | null

export interface State {
	theme: Theme;
	themes: Themes;
	appDiv: AppDiv
}

const state: State = {
	theme: "light",
	themes: ["light", "dark", "starlight", "magnolia", "mint", "plum"],
	appDiv: null
};

enum MutationTypes {
	SetTheme = "SET_THEME",
	SetAppDiv = "SET_APP_DIV"
}

export const UIMutationTypes = {
	SetTheme: `ui/${MutationTypes.SetTheme}`,
	SetAppDiv: `ui/${MutationTypes.SetAppDiv}`
};

export type Mutations = {
	[MutationTypes.SetTheme](state: State, theme: Theme): void;
	[MutationTypes.SetAppDiv](state: State, appDiv: AppDiv): void;
};

const mutations: MutationTree<State> & Mutations = {
	[MutationTypes.SetTheme]: (state: State, theme: string) => {
		state.theme = theme;
		localStorage.setItem("UiModule.theme", theme);

		if (state.appDiv != null) {
			state.appDiv.className = theme;
		}
	},
	[MutationTypes.SetAppDiv]: (state: State, appDiv: AppDiv) => {
		state.appDiv = appDiv;
	}
};

enum ActionTypes {
	Init = "INIT",
	NextTheme = "NEXT_THEME",
	PrevTheme = "PREV_THEME"
}

export const UIActionTypes = {
	Init: `ui/${ActionTypes.Init}`,
	NextTheme: `ui/${ActionTypes.NextTheme}`,
	PrevTheme: `ui/${ActionTypes.PrevTheme}`
};

type ActionAugments = Omit<ActionContext<State, RootState>, "commit"> & {
	commit<K extends keyof Mutations>(
		key: K,
		payload: Parameters<Mutations[K]>[1]
	): ReturnType<Mutations[K]>;
};

type InitOptions = {
	enableKeypressHandler: boolean;
};

export type Actions = {
	[ActionTypes.Init](context: ActionAugments, options: InitOptions): void;
	[ActionTypes.NextTheme](context: ActionAugments): void;
	[ActionTypes.PrevTheme](context: ActionAugments): void;
};

const actions: ActionTree<State, RootState> & Actions = {
	[ActionTypes.Init]: ({ commit, dispatch }, { enableKeypressHandler }) => {
		// Set appDiv
		const appDiv = document.getElementById("app");
		commit(MutationTypes.SetAppDiv, appDiv);

		// Set keyboard theme switching
		if (enableKeypressHandler) {
			document.addEventListener("keypress", function (event: KeyboardEvent) {
				if (event.key === "a") {
					dispatch(ActionTypes.PrevTheme);
				} else if (event.key === "d") {
					dispatch(ActionTypes.NextTheme);
				}
			});
		}

		// Set theme from what was stored or from user preferences
		const storedTheme = localStorage.getItem("UiModule.theme");
		const { matchMedia } = window;

		if (storedTheme) {
			commit(MutationTypes.SetTheme, storedTheme);
		} else if (matchMedia) {
			const isDark = matchMedia("(prefers-color-scheme: dark)").matches;
			const isLight = matchMedia("(prefers-color-scheme: light)").matches;

			if (isDark) {
				commit(MutationTypes.SetTheme, "dark");
			} else if (isLight) {
				commit(MutationTypes.SetTheme, "light");
			}
		}
	},

	[ActionTypes.NextTheme]: ({ state, commit }) => {
		const { theme, themes } = state;
		const themeIndex = themes.indexOf(theme);
		const nextTheme = themes[themeIndex + 1];

		if (nextTheme) {
			commit(MutationTypes.SetTheme, nextTheme);
		} else {
			commit(MutationTypes.SetTheme, themes[0]);
		}
	},

	[ActionTypes.PrevTheme]: ({ state, commit }) => {
		const { theme, themes } = state;
		const themeIndex = themes.indexOf(theme);
		const previousIndex = themeIndex - 1;

		if (previousIndex >= 0) {
			commit(MutationTypes.SetTheme, themes[previousIndex]);
		} else {
			commit(MutationTypes.SetTheme, themes[themes.length - 1]);
		}
	}
};

export const ui: Module<State, RootState> = {
	namespaced: true,
	state,
	mutations,
	actions
};
