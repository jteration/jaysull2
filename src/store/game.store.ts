import { Module, MutationTree } from "vuex";
import { State as RootState } from "./";

type Score = number;

export interface State {
	score: Score;
}

const state: State = {
	score: 0
};

enum MutationTypes {
	IncrementScore = "INCREMENT_SCORE",
	ClearScore = "CLEAR_SCORE"
}

export const GameMutationTypes = {
	IncrementScore: `ui/${MutationTypes.IncrementScore}`,
	ClearScore: `ui/${MutationTypes.ClearScore}`
};

export type Mutations = {
	[MutationTypes.IncrementScore](state: State): void;
	[MutationTypes.ClearScore](state: State): void;
};

const mutations: MutationTree<State> & Mutations = {
	[MutationTypes.IncrementScore]: (state: State) => {
		state.score += 1;
	},
	[MutationTypes.ClearScore]: (state: State) => {
		state.score = 0;
	}
};

export const game: Module<State, RootState> = {
	namespaced: true,
	state,
	mutations
};
