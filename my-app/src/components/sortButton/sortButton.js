import { useDispatch, useSelector } from 'react-redux';
import { ACTION_TYPE } from '../../actions';
import { selectIsAlphabetSorting } from '../../selectors';
import styles from './sortButton.module.css';
export const SortButton = () => {
	const isAlphabetSorting = useSelector(selectIsAlphabetSorting);
	const dispatch = useDispatch();
	return (
		<span
			className={isAlphabetSorting ? `${styles.sort} ${styles.sortActive}` : styles.sort}
			onClick={() => {
				dispatch({ type: ACTION_TYPE.SET_IS_ALPHABET_SORTING, payload: !isAlphabetSorting });
			}}
		>
			Сортировка ⇅
		</span>
	);
};
