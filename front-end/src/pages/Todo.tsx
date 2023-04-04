export default function Todo() {
  return (
    <div>
      <span>TODO</span>
      <input type="text" data-testid="new-todo-input" />
      <button type="button" data-testid="new-todo-add-button">
        추가
      </button>
      <div>todoList 보이는 곳</div>
    </div>
  );
}
