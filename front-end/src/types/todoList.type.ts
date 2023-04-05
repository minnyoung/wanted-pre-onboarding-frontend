export type TodoListType = {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: string;
};

export type TodoListPropsType = {
  todoList: TodoListType[];
  fetchReadTodoList: () => void;
};

export type TodoType = {
  todo: TodoListType;
  todoList: TodoListType[];
  fetchReadTodoList: () => void;
};
