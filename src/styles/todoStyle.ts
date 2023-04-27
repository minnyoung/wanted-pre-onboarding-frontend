import styled from "styled-components";

export const todoStyle = {
  TodoContainer: styled.div`
    margin-bottom: 5px;
    display: flex;
  `,
  TodoInputSpanContainer: styled.label`
    flex: 1;
    input {
      margin-right: 10px;
    }
  `,
  TodoButtonContainer: styled.div`
    button {
      span {
        width: 80%;
        font-size: 20px;
        color: gray;
        :hover {
          text-decoration: underline;
          color: black;
        }
      }
    }
  `,
};

export const todoHeaderStyle = {
  TodoHeaderContainer: styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 6px;

    button {
      font-size: 13px;
      :hover {
        text-decoration: underline;
      }
    }
  `,
};

export const todoInputStyle = {
  TodoInputContainer: styled.div`
    display: flex;
    justify-content: space-between;
    margin: 15px 0;
    input {
      width: 260px;
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
