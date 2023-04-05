import React, { useEffect, useState } from "react";
import { TodoType } from "../types/todoList.type";
import useMakeTodoCheckBox from "./../hooks/useMakeTodoCheckBox";

export default function Todo({ todo, todoList }: TodoType) {
  const { isCompleted, setIsCompleted, handleTodoCheckBox } =
    useMakeTodoCheckBox();

  const [isEditTodoState, setIsEditTodoState] = useState(false);
  const [editTodo, setEditTodo] = useState("");
  const userToken = localStorage.getItem("userToken");

  useEffect(() => {
    setIsCompleted(todo.isCompleted);
    setEditTodo(todo.todo);
  }, []);

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
        <label>
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={handleTodoCheckBox}
          />
          <input
            type="text"
            value={editTodo}
            onChange={changeTodoInput}
            data-testid="modify-input"
          />
        </label>
        <button
          type="button"
          data-testid="submit-button"
          onClick={() => {
            fetchUpdateTodo();
            setIsEditTodoState(false);
          }}
        >
          제출
        </button>
        <button
          type="button"
          onClick={() => setIsEditTodoState(false)}
          data-testid="cancel-button"
        >
          취소
        </button>
      </div>
    );
  }

  async function fetchUpdateTodo() {
    await fetch(
      `https://www.pre-onboarding-selection-task.shop/todos/${todo.id}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${userToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          todo: `${editTodo}`,
          isCompleted: isCompleted,
        }),
      }
    )
      .then((response) => {
        if (response.status !== 200) throw new Error(`${response.status}`);
      })
      .catch((error) =>
        alert(`TODO를 수정하던 중 에러가 발생했습니다. \n에러내용 ${error}`)
      );
  }

  return (
    <li>
      {isEditTodoState ? (
        <UpdateTodo />
      ) : (
        <div>
          <label>
            <input
              type="checkbox"
              checked={isCompleted}
              onChange={handleTodoCheckBox}
            />
            <span>{todo.todo}</span>
          </label>
          <button
            type="button"
            data-testid="modify-button"
            onClick={() => {
              setIsEditTodoState(true);
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
        </div>
      )}
    </li>
  );
}
