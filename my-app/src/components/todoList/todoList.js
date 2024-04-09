import styles from './todoList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { ACTION_TYPE, updateTodoAsync, deleteTodoAsync } from '../../actions';
import { selectTodos, selectEditingTodoTitle, selectEditingTodo } from '../../selectors';

export const TodoList = () => {
	const todos = useSelector(selectTodos);
	const titleData = useSelector(selectEditingTodoTitle);
	const editingTodo = useSelector(selectEditingTodo);
	const dispatch = useDispatch();

	const handleChangeTitle = ({ target }) => {
		dispatch({ type: ACTION_TYPE.EDIT_TODO, payload: { title: target.value } });
	};

	const changingTodo = (id, title) => {
		dispatch({ type: ACTION_TYPE.EDIT_TODO, payload: { id, title, Status: true } });
	};

	const changingTodoStatus = () => {
		dispatch({ type: ACTION_TYPE.EDIT_TODO, payload: { Status: false } });
	};

	const onCompletedChange = (id, completed) => {
		dispatch(updateTodoAsync({ id, completed: !completed }));
	};

	const onUpdateTodoTitle = (id, titleData) => {
		dispatch(updateTodoAsync({ id, title: titleData }));
		dispatch({ type: ACTION_TYPE.EDIT_TODO, payload: { Status: false } });
	};
	return (
		<ol className={styles.dataContainer}>
			{todos.map(({ id, title, completed }) => (
				<li key={id}>
					{editingTodo.Status && id === editingTodo.id ? (
						<input className={styles.inputTodoChange} type="text" value={titleData} onChange={handleChangeTitle} />
					) : (
						<span className={completed ? styles.textDecoration : null} onClick={() => changingTodo(id, title)}>
							{title}
						</span>
					)}
					<span>
						<span
							className={styles.btn}
							onClick={() => (editingTodo.Status ? onUpdateTodoTitle(id, titleData) : onCompletedChange(id, completed))}
						>
							✔
						</span>
						<span
							className={`${styles.btn} ${styles.btnDel}`}
							onClick={() => (editingTodo.Status ? changingTodoStatus() : dispatch(deleteTodoAsync(id)))}
						>
							✖
						</span>
					</span>
				</li>
			))}
		</ol>
	);
};
