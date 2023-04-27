import Todo from "./Todo";
import { TodoListPropsType, TodoListType } from "../types/todo.type";
import { todoListStyle as S } from "../styles/todoPageStyle";

export default function TodoList({
  todoList,
  onDeleteTodo,
  onUpdateTodo,
}: TodoListPropsType) {
  return (
    <S.TodoListContainer className="TodoList">
      <ul>
        {todoList.map((todo: TodoListType) => (
          <Todo
            todo={todo}
            key={todo.id}
            onDeleteTodo={onDeleteTodo}
            onUpdateTodo={onUpdateTodo}
          />
        ))}
      </ul>
    </S.TodoListContainer>
  );
}
