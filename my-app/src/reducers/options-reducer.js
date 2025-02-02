import { ACTION_TYPE } from '../actions';

const optionsInitialState = {
	inputData: '',
	searchPhrase: '',
	isAlphabetSorting: false,
	isLoading: true,
	isSearchMode: false,
};

export const optionsReducer = (state = optionsInitialState, { type, payload }) => {
	switch (type) {
		case ACTION_TYPE.LOADING_START:
			return {
				...state,
				isLoading: true,
			};
		case ACTION_TYPE.LOADING_END:
			return {
				...state,
				isLoading: false,
			};
		case ACTION_TYPE.SET_INPUT_DATA:
			return {
				...state,
				inputData: payload,
			};
		case ACTION_TYPE.SET_SEARCH_PHRASE:
			return {
				...state,
				searchPhrase: payload,
			};
		case ACTION_TYPE.SET_IS_ALPHABET_SORTING:
			return {
				...state,
				isAlphabetSorting: payload,
			};
		case ACTION_TYPE.SET_IS_SEARCH_MODE:
			return {
				...state,
				isSearchMode: payload,
			};
		default:
			return state;
	}
};
