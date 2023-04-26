import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TodoList from "../components/TodoList";
import { TodoListType } from "../types/todoList.type";
import TodoHeader from "../components/TodoHeader";
import TodoInput from "../components/TodoInput";
import styled from "styled-components";
import SnackBar from "../components/SnackBar";
import {
  fetchCreateTodo,
  fetchDeleteTodo,
  fetchReadTodoList,
  fetchUpdateTodo,
} from "../apis/Todo";

export default function TodoPage() {
  const navigate = useNavigate();
  const [todoList, setTodoList] = useState<TodoListType[]>([]);
  const [isSnackBarShowing, setIsSnackBarShowing] = useState(false);
  const [snackBarMessage, setsnackBarMessage] = useState("");

  const userToken = localStorage.getItem("userToken");

  useEffect(() => {
    if (!localStorage.getItem("userToken")) {
      navigate("/signin");
    }
  });

  useEffect(() => {
    onReadTodoList();
  }, []);

  const onReadTodoList = async () => {
    const fetchedTodos = await fetchReadTodoList(userToken);
    setTodoList(fetchedTodos);
  };

  const onCreateTodo = async (userToken: string | null, todo: string) => {
    await fetchCreateTodo(userToken, todo);
    onReadTodoList();
  };
  const onDeleteTodo = async (userToken: string | null, todoId: number) => {
    await fetchDeleteTodo(userToken, todoId);
    onReadTodoList();
  };
  const onUpdateTodo = async (
    userToken: string | null,
    id: number,
    editTodo: string,
    isCompleted: boolean
  ) => {
    await fetchUpdateTodo(userToken, id, editTodo, isCompleted);
    onReadTodoList();
  };

  return (
    <>
      {isSnackBarShowing && (
        <SnackBar
          message={snackBarMessage}
          setIsSnackBarShowing={setIsSnackBarShowing}
        />
      )}
      <S.TodoPageContainer>
        <TodoHeader />
        <TodoInput onCreateTodo={onCreateTodo} />
        <TodoList
          todoList={todoList}
          onDeleteTodo={onDeleteTodo}
          onUpdateTodo={onUpdateTodo}
        />
      </S.TodoPageContainer>
    </>
  );
}

const S = {
  TodoPageContainer: styled.div`
    padding: 15px 25px;
    width: 100%;
    height: 700px;
    border: 1px solid gray;
    border-radius: 5px;
    background-color: white;
  `,
};
