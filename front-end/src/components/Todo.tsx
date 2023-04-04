import { TodoType } from "../types/todoList.type";

export default function Todo({ todo, todoList }: TodoType) {
  const userToken = localStorage.getItem("userToken");

  async function fetchDeleteTodo() {
    const deleteTodoAnswer = window.confirm("삭제하시겠습니까?");
    deleteTodoAnswer &&
      (await fetch(
        `https://www.pre-onboarding-selection-task.shop/todos/${todo.id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      )
        .then((response) => {
          if (response.status !== 204) throw new Error(`${response.status}`);
        })
        .catch((error) =>
          alert(`TODO를 삭제하던 중 에러가 발생했습니다. \n에러내용 ${error}`)
        ));
  }

  return (
    <li>
      <label>
        <input type="checkbox" checked={todo.isCompleted} />
        <span>{todo.todo}</span>
        <button
          type="button"
          data-testid="delete-button"
          onClick={fetchDeleteTodo}
        >
          삭제
        </button>
      </label>
    </li>
  );
}
