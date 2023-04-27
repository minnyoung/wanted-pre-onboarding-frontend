import useMakeUserTodo from "../hooks/useMakeUserTodo";
import { TodoInputType } from "../types/todo.type";
import { todoInputStyle as S } from "./../styles/todoStyle";

export default function TodoInput({ onCreateTodo }: TodoInputType) {
  const userToken = localStorage.getItem("userToken");
  const { userTodo, setUserTodo, handleUserTodo } = useMakeUserTodo();

  return (
    <S.TodoInputContainer>
      <input
        placeholder="할 일을 입력하세요!"
        type="text"
        data-testid="new-todo-input"
        value={userTodo}
        onChange={handleUserTodo}
      />
      <button
        type="button"
        data-testid="new-todo-add-button"
        onClick={() => {
          onCreateTodo(userToken, userTodo);
          setUserTodo("");
        }}
      >
        추가
      </button>
    </S.TodoInputContainer>
  );
}
