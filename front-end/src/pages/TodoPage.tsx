import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useMakeUserTodo from "../hooks/useMakeUserTodo";
import TodoList from "../components/TodoList";
import { TodoListType } from "../types/todoList.type";
import TodoHeader from "../components/TodoHeader";
import TodoInput from "../components/TodoInput";
import styled from "styled-components";

export default function TodoPage() {
  const navigate = useNavigate();
  const { userTodo, setUserTodo, handleUserTodo } = useMakeUserTodo();
  const [todoList, setTodoList] = useState<TodoListType[]>([]);
  const userToken = localStorage.getItem("userToken");

  useEffect(() => {
    if (!localStorage.getItem("userToken")) {
      navigate("/signin");
    }
  });

  useEffect(fetchReadTodoList, []);

  function fetchReadTodoList() {
    fetch("https://www.pre-onboarding-selection-task.shop/todos", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setTodoList(data);
      });
  }

  async function fetchCreateTodoList() {
    await fetch("https://www.pre-onboarding-selection-task.shop/todos", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${userToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        todo: `${userTodo}`,
      }),
    })
      .then((response) => {
        if (response.status !== 201) throw new Error(`${response.status}`);
        setUserTodo("");
        fetchReadTodoList();
      })
      .catch((error) =>
        alert(`TODO를 등록하던 중 에러가 발생했습니다. \n에러내용 ${error}`)
      );
  }

  return (
    <S.TodoPageContainer>
      <TodoHeader />
      <TodoInput
        userTodo={userTodo}
        handleUserTodo={handleUserTodo}
        fetchCreateTodoList={fetchCreateTodoList}
      />
      <TodoList todoList={todoList} fetchReadTodoList={fetchReadTodoList} />
    </S.TodoPageContainer>
  );
}

const S = {
  TodoPageContainer: styled.div`
    width: 100%;
    height: 700px;
  `,
};
