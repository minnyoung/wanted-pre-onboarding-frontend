import { useState } from "react";

export default function useMakeEditTodoInput() {
  const [editTodo, setEditTodo] = useState("");

  function changeTodoInput(event: React.ChangeEvent<HTMLInputElement>) {
    setEditTodo(event.currentTarget.value);
  }
  return { editTodo, setEditTodo, changeTodoInput };
}
