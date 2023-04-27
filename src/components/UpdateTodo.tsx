import React, { useEffect } from "react";
import useMakeEditTodoInput from "../hooks/useMakeEditTodoInput";
import useMakeTodoCheckBox from "../hooks/useMakeTodoCheckBox";
import { updateTodoStyle as S } from "./../styles/updateTodoStyle";

type UpdateTodoType = {
  serverTodo: string | undefined;
  serverIsCompleted: boolean;
  todoId: number;
  setIsEditTodoState: (state: boolean) => void;
  onUpdateTodo: (
    userToken: string | null,
    id: number,
    editTodo: string,
    isCompleted: boolean
  ) => Promise<void>;
};

export default function UpdateTodo({
  serverTodo,
  serverIsCompleted,
  todoId,
  setIsEditTodoState,
  onUpdateTodo,
}: UpdateTodoType) {
  const { isCompleted, setIsCompleted, handleTodoCheckBox } =
    useMakeTodoCheckBox();
  const { editTodo, setEditTodo, changeTodoInput } = useMakeEditTodoInput();
  const userToken = localStorage.getItem("userToken");

  useEffect(() => {
    serverTodo && setEditTodo(serverTodo);
    setIsCompleted(serverIsCompleted);
  }, []);

  return (
    <S.TodoContainer>
      <S.TodoInputSpanContainer>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={handleTodoCheckBox}
        />
        <S.TodoWriteToInput
          type="text"
          value={editTodo}
          onChange={changeTodoInput}
          placeholder="할 일을 입력하세요!"
          data-testid="modify-input"
        />
      </S.TodoInputSpanContainer>
      <S.TodoButtonContainer>
        <button
          type="button"
          data-testid="submit-button"
          onClick={() => {
            onUpdateTodo(userToken, todoId, editTodo, isCompleted);
            setIsEditTodoState(false);
          }}
          title="제출"
        >
          <span className="material-symbols-outlined">
            published_with_changes
          </span>
        </button>
        <button
          type="button"
          onClick={() => setIsEditTodoState(false)}
          data-testid="cancel-button"
          title="취소"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
      </S.TodoButtonContainer>
    </S.TodoContainer>
  );
}
