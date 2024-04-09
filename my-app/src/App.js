import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSearchPhrase, selectIsAlphabetSorting, selectIsLoading } from './selectors';
import { readTodosAsync } from './actions';
import { Field, SortButton, TodoList } from './components';
import styles from './App.module.css';

export const App = () => {
	const searchPhrase = useSelector(selectSearchPhrase);
	const isAlphabetSorting = useSelector(selectIsAlphabetSorting);
	const isLoading = useSelector(selectIsLoading);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(readTodosAsync(searchPhrase, isAlphabetSorting));
	}, [searchPhrase, isAlphabetSorting]);

	return (
		<div className={styles.App}>
			<div>
				<Field />
				<SortButton />
			</div>
			{isLoading ? <div>Loading...</div> : <TodoList />}
		</div>
	);
};
