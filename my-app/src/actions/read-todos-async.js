import { readTodos } from '../api';
import { ACTION_TYPE } from '../actions';

export const readTodosAsync = (searchPhrase, isAlphabetSorting) => (dispatch) => {
	dispatch({ type: ACTION_TYPE.LOADING_START });

	return readTodos(searchPhrase, isAlphabetSorting)
		.then((loadedTodos) => {
			if (isAlphabetSorting) {
				loadedTodos = [...loadedTodos].sort((a, b) => a.title.localeCompare(b.title));
			}
			return loadedTodos; // Вернуть отсортированный массив
		})
		.then((loadedTodos) => {
			dispatch({ type: ACTION_TYPE.SET_TODOS, payload: loadedTodos });
		})
		.finally(() => dispatch({ type: ACTION_TYPE.LOADING_END }));
};
