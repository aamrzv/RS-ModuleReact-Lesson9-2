import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './field.module.css';
import { selectIsAlphabetSorting, selectIsLoading, selectIsSearchMode, selectinputData } from '../../selectors';
import { ACTION_TYPE, createTodosAsync, readTodosAsync } from '../../actions';

export const Field = () => {
	const isLoading = useSelector(selectIsLoading);
	const isSearchMode = useSelector(selectIsSearchMode);
	const inputData = useSelector(selectinputData);
	const isAlphabetSorting = useSelector(selectIsAlphabetSorting);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!isSearchMode) {
			dispatch(readTodosAsync('', isAlphabetSorting));
		}
	}, [isSearchMode]);

	const handleChangeInput = ({ target }) => {
		dispatch({ type: ACTION_TYPE.SET_INPUT_DATA, payload: target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(inputData);
		dispatch(createTodosAsync({ title: inputData }));
		dispatch({ type: ACTION_TYPE.SET_INPUT_DATA, payload: '' });
	};

	const hendleSearchTodo = (event) => {
		const input = event.target.value.toLowerCase();
		dispatch({ type: ACTION_TYPE.SET_INPUT_DATA, payload: input });
		dispatch(readTodosAsync(input, isAlphabetSorting));
	};
	return (
		<div>
			<h1>Задачи</h1>
			<form className={styles.conteiner} onSubmit={handleSubmit}>
				<input
					className={styles.input}
					placeholder={isSearchMode ? 'Поиск' : 'Введите название'}
					type="text"
					value={inputData}
					onChange={isSearchMode ? hendleSearchTodo : handleChangeInput}
				/>
				<button
					className={isSearchMode ? `${styles.btnScr} ${styles.btnScrActive}` : styles.btnScr}
					type="button"
					onClick={() => {
						dispatch({ type: ACTION_TYPE.SET_IS_SEARCH_MODE, payload: !isSearchMode });
						dispatch({ type: ACTION_TYPE.SET_INPUT_DATA, payload: '' });
					}}
				>
					<SearchIcon />
				</button>
				<button className={styles.btn} type="submit" disabled={isLoading}>
					Добавить
				</button>
			</form>
		</div>
	);
};

function SearchIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<circle cx="11" cy="11" r="8" />
			<path d="m21 21-4.3-4.3" />
		</svg>
	);
}
