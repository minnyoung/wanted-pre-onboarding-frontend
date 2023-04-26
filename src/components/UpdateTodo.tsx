import React, { useEffect } from "react";
import useMakeEditTodoInput from "../hooks/useMakeEditTodoInput";
import useMakeTodoCheckBox from "../hooks/useMakeTodoCheckBox";
import styled from "styled-components";

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
            window.location.reload();
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

const S = {
  TodoContainer: styled.div`
    margin-bottom: 5px;
    display: flex;
  `,
  TodoInputSpanContainer: styled.label`
    flex: 1;
    input {
      margin-right: 10px;
    }
  `,
  TodoWriteToInput: styled.input`
    padding-left: 5px;
    width: 80%;
    font-size: 16px;
    border: 1px solid gray;
    border-radius: 5px;
  `,
  TodoButtonContainer: styled.div`
    button {
      span {
        font-size: 15px;
        font-weight: 800;
        color: gray;

        :hover {
          text-decoration: underline;
          color: black;
        }
      }
    }
  `,
};
