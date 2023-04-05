import React, { useEffect } from "react";
import useMakeEditTodoInput from "../hooks/useMakeEditTodoInput";
import useMakeTodoCheckBox from "../hooks/useMakeTodoCheckBox";

type UpdateTodoType = {
  serverTodo: string | undefined;
  setIsEditTodoState: (state: boolean) => void;
  fetchUpdateTodo: (todo: string, isCompleted: boolean) => void;
};

export default function UpdateTodo({
  serverTodo,
  setIsEditTodoState,
  fetchUpdateTodo,
}: UpdateTodoType) {
  const { isCompleted, handleTodoCheckBox } = useMakeTodoCheckBox();
  const { editTodo, setEditTodo, changeTodoInput } = useMakeEditTodoInput();

  useEffect(() => {
    serverTodo && setEditTodo(serverTodo);
  }, []);

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
          fetchUpdateTodo(editTodo, isCompleted);
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
