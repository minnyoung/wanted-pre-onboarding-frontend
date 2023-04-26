import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useMakeUserTodo from "../hooks/useMakeUserTodo";
import TodoList from "../components/TodoList";
import { TodoListType } from "../types/todoList.type";
import TodoHeader from "../components/TodoHeader";
import TodoInput from "../components/TodoInput";
import styled from "styled-components";
import SnackBar from "../components/SnackBar";

export default function TodoPage() {
  const navigate = useNavigate();
  const { userTodo, setUserTodo, handleUserTodo } = useMakeUserTodo();
  const [todoList, setTodoList] = useState<TodoListType[]>([]);
  const [isSnackBarShowing, setIsSnackBarShowing] = useState(false);
  const [snackBarMessage, setsnackBarMessage] = useState("");

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
      .then((response) => response.json())
      .then((data) => {
        if (data.statusCode === 400) {
          setsnackBarMessage("TODO를 입력해주세요.");
          throw new Error(data.statusCode);
        } else if (data.statusCode)
          throw new Error(
            `TODO를 등록하던 중 에러가 발생했습니다. \n에러코드 ${data.statusCode}`
          );
        setUserTodo("");
        fetchReadTodoList();
      })
      .catch((error) => {
        setIsSnackBarShowing(true);
      });
  }

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
        <TodoInput
          userTodo={userTodo}
          handleUserTodo={handleUserTodo}
          fetchCreateTodoList={fetchCreateTodoList}
        />
        <TodoList todoList={todoList} fetchReadTodoList={fetchReadTodoList} />
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
