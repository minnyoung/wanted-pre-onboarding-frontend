import Todo from "./Todo";
import { TodoListPropsType, TodoListType } from "../types/todoList.type";
import styled from "styled-components";

export default function TodoList({
  todoList,
  onDeleteTodo,
  onUpdateTodo,
}: TodoListPropsType) {
  return (
    <S.TodoListContainer className="TodoList">
      <ul>
        {todoList.map((todo: TodoListType) => (
          <Todo
            todo={todo}
            key={todo.id}
            onDeleteTodo={onDeleteTodo}
            onUpdateTodo={onUpdateTodo}
          />
        ))}
      </ul>
    </S.TodoListContainer>
  );
}

const S = {
  TodoListContainer: styled.div`
    height: 90%;
    overflow: auto;
    ::-webkit-scrollbar {
      width: 7px; /* 스크롤바의 너비 */
    }
    ::-webkit-scrollbar-thumb {
      height: 20%; /* 스크롤바의 길이 */
      background: #e6e6e6; /* 스크롤바의 색상 */
      border-radius: 10px;
    }
  `,
};
