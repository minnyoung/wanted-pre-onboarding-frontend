import useMakeEditTodoInput from "../hooks/useMakeEditTodoInput";
import useMakeTodoCheckBox from "../hooks/useMakeTodoCheckBox";

type UpdateTodoType = {
  editTodo: string;
  setIsEditTodoState: (state: boolean) => void;
};

export default function UpdateTodo({
  editTodo,
  setIsEditTodoState,
}: UpdateTodoType) {
  const { isCompleted, handleTodoCheckBox } = useMakeTodoCheckBox();
  const { changeTodoInput } = useMakeEditTodoInput();

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
          //   fetchUpdateTodo();
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
