import { Store } from "vuex";
import { State as GameState } from "./game.store";
import { State as UiState } from "./ui.store";

declare module "@vue/runtime-core" {
	// declare your own store states
	interface State {
		game: GameState;
		ui: UiState;
	}

	// provide typings for `this.$store`
	interface ComponentCustomProperties {
		$store: Store<State>;
	}
}
