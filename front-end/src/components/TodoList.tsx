import Todo from "./Todo";
import { TodoListPropsType, TodoListType } from "../types/todoList.type";

export default function TodoList({ todoList }: TodoListPropsType) {
  return (
    <div>
      <ul>
        {todoList.map((todo: TodoListType) => (
          <Todo todo={todo} key={todo.id} />
        ))}
      </ul>
    </div>
  );
}
