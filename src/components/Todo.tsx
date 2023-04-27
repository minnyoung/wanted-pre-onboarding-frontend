import React, { useEffect, useState } from "react";
import { TodoType } from "../types/todoList.type";
import useMakeTodoCheckBox from "./../hooks/useMakeTodoCheckBox";
import useMakeEditTodoInput from "../hooks/useMakeEditTodoInput";
import UpdateTodo from "./UpdateTodo";
import ConfirmModal from "./ConfirmModal";
import { todoStyle as S } from "../styles/todoStyle";

export default function Todo({ todo, onDeleteTodo, onUpdateTodo }: TodoType) {
  const { isCompleted, setIsCompleted, handleTodoCheckBox } =
    useMakeTodoCheckBox();
  const { editTodo, setEditTodo } = useMakeEditTodoInput();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditTodoState, setIsEditTodoState] = useState(false);
  const [todoContents, setTodoContents] = useState("");

  const userToken = localStorage.getItem("userToken");

  useEffect(() => {
    setIsCompleted(todo.isCompleted);
    setEditTodo(todo.todo);
    setTodoContents(
      todo.todo.length > 16 ? `${todo.todo.slice(0, 16)}...` : todo.todo
    );
  }, []);

  return (
    <li>
      {isEditTodoState ? (
        <UpdateTodo
          setIsEditTodoState={setIsEditTodoState}
          serverIsCompleted={isCompleted}
          serverTodo={editTodo}
          todoId={todo.id}
          onUpdateTodo={onUpdateTodo}
        />
      ) : (
        <S.TodoContainer>
          <S.TodoInputSpanContainer>
            <input
              type="checkbox"
              checked={isCompleted}
              onChange={handleTodoCheckBox}
              onClick={(event) =>
                onUpdateTodo(
                  userToken,
                  todo.id,
                  editTodo,
                  event.currentTarget.checked
                )
              }
            />
            <span
              onMouseEnter={() => setTodoContents(todo.todo)}
              onMouseLeave={() =>
                setTodoContents(
                  todo.todo.length > 16
                    ? `${todo.todo.slice(0, 16)}...`
                    : todo.todo
                )
              }
            >
              {todoContents}
            </span>
          </S.TodoInputSpanContainer>
          <S.TodoButtonContainer>
            <button
              type="button"
              data-testid="modify-button"
              onClick={() => {
                setIsEditTodoState(true);
              }}
              title="수정"
            >
              <span className="material-symbols-outlined">edit</span>
            </button>
            <button
              type="button"
              data-testid="delete-button"
              onClick={() => setIsModalVisible(true)}
              title="삭제"
            >
              <span className="material-symbols-outlined">delete_forever</span>
            </button>
            {isModalVisible && (
              <ConfirmModal
                todoId={todo.id}
                userToken={userToken}
                setIsModalVisible={setIsModalVisible}
                onDeleteTodo={onDeleteTodo}
              />
            )}
          </S.TodoButtonContainer>
        </S.TodoContainer>
      )}
    </li>
  );
}
