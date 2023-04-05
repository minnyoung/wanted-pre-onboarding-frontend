import React, { useEffect, useState } from "react";
import { TodoType } from "../types/todoList.type";
import useMakeTodoCheckBox from "./../hooks/useMakeTodoCheckBox";
import useMakeEditTodoInput from "../hooks/useMakeEditTodoInput";
import UpdateTodo from "./UpdateTodo";

export default function Todo({ todo, fetchReadTodoList }: TodoType) {
  const { isCompleted, setIsCompleted, handleTodoCheckBox } =
    useMakeTodoCheckBox();
  const { editTodo, setEditTodo } = useMakeEditTodoInput();

  const [isEditTodoState, setIsEditTodoState] = useState(false);
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
          fetchReadTodoList();
        })
        .catch((error) =>
          alert(`TODO를 삭제하던 중 에러가 발생했습니다. \n에러내용 ${error}`)
        ));
  }

  async function fetchUpdateTodo(editTodo: string, isCompleted: boolean) {
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
        window.location.replace("/todo");
      })
      .catch((error) =>
        alert(`TODO를 수정하던 중 에러가 발생했습니다. \n에러내용 ${error}`)
      );
  }

  return (
    <li>
      {isEditTodoState ? (
        <UpdateTodo
          setIsEditTodoState={setIsEditTodoState}
          serverTodo={editTodo}
          fetchUpdateTodo={fetchUpdateTodo}
        />
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
