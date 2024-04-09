export const selectTodos = ({ todos }) => todos;

export const selectinputData = ({ options }) => options.inputData;

export const selectSearchPhrase = ({ options }) => options.searchPhrase;

export const selectIsAlphabetSorting = ({ options }) => options.isAlphabetSorting;

export const selectIsLoading = ({ options }) => options.isLoading;

export const selectIsSearchMode = ({ options }) => options.isSearchMode;

export const selectEditingTodo = ({ editingTodo }) => editingTodo;

export const selectEditingTodoId = ({ editingTodo }) => editingTodo.id;

export const selectEditingTodoTitle = ({ editingTodo }) => editingTodo.title;
