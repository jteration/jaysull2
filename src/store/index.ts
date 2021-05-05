import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";
import { game, State as GameState } from "./game.store";
import {
	ui,
	State as UiState,
	UIActionTypes,
	UIMutationTypes
} from "./ui.store";

export interface State {
	game: GameState;
	ui: UiState;
}

export const ActionTypes = {
	UI: UIActionTypes
};

export const MutationTypes = {
	UI: UIMutationTypes
};

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
	modules: {
		game,
		ui
	}
});

export function useStore(): Store<State> {
	return baseUseStore(key);
}
