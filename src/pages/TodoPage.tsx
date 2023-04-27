import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TodoList from "../components/TodoList";
import { TodoListType } from "../types/todoList.type";
import TodoHeader from "../components/TodoHeader";
import TodoInput from "../components/TodoInput";
import styled from "styled-components";
import Toast from "../components/Toast";
import {
  fetchCreateTodo,
  fetchDeleteTodo,
  fetchReadTodoList,
  fetchUpdateTodo,
} from "../apis/todoApis";
import { GlobalContext } from "../provider/GlobalProvider";

export default function TodoPage() {
  const navigate = useNavigate();
  const [todoList, setTodoList] = useState<TodoListType[]>([]);
  const globalState = useContext(GlobalContext);

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
    const { error, message } = await fetchCreateTodo(userToken, todo);
    if (error) {
      globalState.setFetchState("error");
      globalState.setFetchMessage(message);
      globalState.setIsToastActive(true);
    }
    onReadTodoList();
  };

  const onDeleteTodo = async (userToken: string | null, todoId: number) => {
    const { error, message } = await fetchDeleteTodo(userToken, todoId);
    if (error) {
      globalState.setFetchState("error");
      globalState.setFetchMessage(message);
      globalState.setIsToastActive(true);
    }
    onReadTodoList();
  };
  const onUpdateTodo = async (
    userToken: string | null,
    id: number,
    editTodo: string,
    isCompleted: boolean
  ) => {
    const { error, message } = await fetchUpdateTodo(
      userToken,
      id,
      editTodo,
      isCompleted
    );
    if (error) {
      globalState.setFetchState("error");
      globalState.setFetchMessage(message);
      globalState.setIsToastActive(true);
    } else {
      globalState.setFetchState("success");
      window.location.reload();
    }
    onReadTodoList();
  };

  return (
    <>
      {globalState.isToastActive && (
        <Toast
          isToastActive={globalState.isToastActive}
          setIsToastShowing={globalState.setIsToastActive}
          fetchState={globalState.fetchState}
          message={globalState.fetchMessage}
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
