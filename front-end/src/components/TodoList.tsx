import { TodoListPropsType, TodoListType } from "../types/todoList.type";

export default function TodoList({ todoList }: TodoListPropsType) {
  return (
    <div>
      <ul>
        {todoList.map((todo: TodoListType) => (
          <li key={todo.id}>
            <label>
              <input type="checkbox" checked={todo.isCompleted} />
              <span>{todo.todo}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
