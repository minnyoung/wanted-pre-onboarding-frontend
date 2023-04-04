import React, { useEffect, useState } from "react";
import useMakeUserTodo from "../hooks/useMakeUserTodo";

type TodoListType = {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: string;
};

export default function Todo() {
  const { userTodo, handleUserTodo } = useMakeUserTodo();
  const [todoList, setTodoList] = useState<TodoListType[]>([]);
  const userToken = localStorage.getItem("userToken");

  useEffect(fetchReadTodoList, []);

  function fetchReadTodoList() {
    fetch("https://www.pre-onboarding-selection-task.shop/todos", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setTodoList(data);
      });
  }

  async function fetchCreateTodoList() {
    await fetch("https://www.pre-onboarding-selection-task.shop/todos", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${userToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        todo: `${userTodo}`,
      }),
    })
      .then((response) => {
        if (response.status !== 201) throw new Error(`${response.status}`);
        fetchReadTodoList();
      })
      .catch((error) =>
        alert(`TODO를 등록하던 중 에러가 발생했습니다. \n에러내용 ${error}`)
      );
  }

  return (
    <div>
      <span>TODO</span>
      <input
        type="text"
        data-testid="new-todo-input"
        value={userTodo}
        onChange={handleUserTodo}
      />
      <button
        type="button"
        data-testid="new-todo-add-button"
        onClick={fetchCreateTodoList}
      >
        추가
      </button>
      <ul>
        {todoList.map((todo) => (
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
