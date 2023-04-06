import styled from "styled-components";

type TodoInputType = {
  userTodo: string;
  handleUserTodo: (event: React.ChangeEvent<HTMLInputElement>) => void;
  fetchCreateTodoList: () => void;
};

export default function TodoInput({
  userTodo,
  handleUserTodo,
  fetchCreateTodoList,
}: TodoInputType) {
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
        onClick={fetchCreateTodoList}
      >
        추가
      </button>
    </S.TodoInputContainer>
  );
}

const S = {
  TodoInputContainer: styled.div`
    display: flex;
    justify-content: space-between;
    margin: 15px 0;
    input {
      width: 250px;
      font-size: 17px;
      line-height: 2;
      border-bottom: 1px solid gray;
    }
    button {
      width: 50px;
      border: 1px solid gray;
      border-radius: 5px;
      :hover {
        background-color: #f0f0f0;
        transition: 0.1s ease-in-out;
      }
    }
  `,
};
