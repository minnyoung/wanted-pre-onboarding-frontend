import { TodoType } from "../types/todoList.type";

export default function Todo({ todo }: TodoType) {
  return (
    <li>
      <label>
        <input type="checkbox" checked={todo.isCompleted} />
        <span>{todo.todo}</span>
      </label>
    </li>
  );
}
