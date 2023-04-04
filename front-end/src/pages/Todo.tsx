import React, { useEffect, useState } from "react";
import useMakeUserTodo from "../hooks/useMakeUserTodo";
import TodoList from "../components/TodoList";
import { TodoListType } from "../types/todoList.type";

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
      <TodoList todoList={todoList} />
    </div>
  );
}
