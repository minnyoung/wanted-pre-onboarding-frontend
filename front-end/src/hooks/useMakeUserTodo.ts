import React, { useState } from "react";

export default function useMakeUserTodo() {
  const [userTodo, setUserTodo] = useState("");

  function handleUserTodo(event: React.ChangeEvent<HTMLInputElement>) {
    setUserTodo(event.currentTarget.value);
  }

  return { userTodo, handleUserTodo };
}
