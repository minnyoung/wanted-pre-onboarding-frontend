export type TodoListType = {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: string;
};

export type TodoListPropsType = {
  todoList: TodoListType[];
  onUpdateTodo: (
    userToken: string | null,
    id: number,
    editTodo: string,
    isCompleted: boolean
  ) => Promise<void>;
  onDeleteTodo: (userToken: string | null, todoId: number) => Promise<void>;
};

export type TodoType = {
  todo: TodoListType;
  onUpdateTodo: (
    userToken: string | null,
    id: number,
    editTodo: string,
    isCompleted: boolean
  ) => Promise<void>;
  onDeleteTodo: (userToken: string | null, todoId: number) => Promise<void>;
};
