import React, { useState } from "react";
import useMakeUserTodo from "../hooks/useMakeUserTodo";

export default function Todo() {
  const { userTodo, handleUserTodo } = useMakeUserTodo();
  return (
    <div>
      <span>TODO</span>
      <input
        type="text"
        data-testid="new-todo-input"
        value={userTodo}
        onChange={handleUserTodo}
      />
      <button type="button" data-testid="new-todo-add-button">
        추가
      </button>
      <div>todoList 보이는 곳</div>
    </div>
  );
}
