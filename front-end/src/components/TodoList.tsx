import Todo from "./Todo";
import { TodoListPropsType, TodoListType } from "../types/todoList.type";

export default function TodoList({
  todoList,
  fetchReadTodoList,
}: TodoListPropsType) {
  return (
    <div>
      <ul>
        {todoList.map((todo: TodoListType) => (
          <Todo
            todo={todo}
            todoList={todoList}
            key={todo.id}
            fetchReadTodoList={fetchReadTodoList}
          />
        ))}
      </ul>
    </div>
  );
}
