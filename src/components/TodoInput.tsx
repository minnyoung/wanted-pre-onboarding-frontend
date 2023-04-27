import useMakeUserTodo from "../hooks/useMakeUserTodo";
import { todoInputStyle as S } from "./../styles/todoStyle";

type TodoInputType = {
  onCreateTodo: (userToken: string | null, userTodo: string) => void;
};

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
