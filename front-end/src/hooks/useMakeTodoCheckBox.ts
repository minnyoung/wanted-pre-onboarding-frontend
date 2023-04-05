import { useState } from "react";

export default function useMakeTodoCheckBox() {
  const [isCompleted, setIsCompleted] = useState(false);

  function handleTodoCheckBox(event: React.ChangeEvent<HTMLInputElement>) {
    setIsCompleted(event.target.checked);
  }

  return { isCompleted, setIsCompleted, handleTodoCheckBox };
}
