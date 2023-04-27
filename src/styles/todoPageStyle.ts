import styled from "styled-components";

export const todoPageStyle = {
  TodoPageContainer: styled.div`
    padding: 15px 25px;
    width: 100%;
    height: 700px;
    border: 1px solid gray;
    border-radius: 5px;
    background-color: white;
  `,
};

export const todoListStyle = {
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
