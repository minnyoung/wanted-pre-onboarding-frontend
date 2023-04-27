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

export type TodoInputType = {
  onCreateTodo: (userToken: string | null, userTodo: string) => void;
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

export type UpdateTodoType = {
  serverTodo: string | undefined;
  serverIsCompleted: boolean;
  todoId: number;
  setIsEditTodoState: (state: boolean) => void;
  onUpdateTodo: (
    userToken: string | null,
    id: number,
    editTodo: string,
    isCompleted: boolean
  ) => Promise<void>;
};
