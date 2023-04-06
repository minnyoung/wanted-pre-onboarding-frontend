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
    <div>
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
    </div>
  );
}
