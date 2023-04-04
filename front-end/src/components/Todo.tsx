import React, { useState } from "react";
import { TodoType } from "../types/todoList.type";

export default function Todo({ todo, todoList }: TodoType) {
  const [isEditTodoState, setIsEditTodoState] = useState(false);
  const [editTodo, setEditTodo] = useState("");
  const userToken = localStorage.getItem("userToken");

  function confirmDeleteTodo() {
    const deleteTodoAnswer = window.confirm("삭제하시겠습니까?");
    return deleteTodoAnswer;
  }

  async function fetchDeleteTodo() {
    confirmDeleteTodo() &&
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

  function changeTodoInput(event: React.ChangeEvent<HTMLInputElement>) {
    setEditTodo(event.currentTarget.value);
  }

  function UpdateTodo() {
    return (
      <div>
        <input type="text" value={editTodo} onChange={changeTodoInput} />
        <button type="button">제출</button>
        <button type="button">취소</button>
      </div>
    );
  }

  return (
    <li>
      <label>
        <input type="checkbox" checked={todo.isCompleted} />
        {isEditTodoState ? (
          <UpdateTodo />
        ) : (
          <>
            <span>{todo.todo}</span>
            <button
              type="button"
              data-testid="modify-button"
              onClick={() => {
                setIsEditTodoState(true);
                setEditTodo(todo.todo);
              }}
            >
              수정
            </button>
            <button
              type="button"
              data-testid="delete-button"
              onClick={fetchDeleteTodo}
            >
              삭제
            </button>
          </>
        )}
      </label>
    </li>
  );
}
