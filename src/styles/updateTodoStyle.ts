import styled from "styled-components";

export const updateTodoStyle = {
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
  TodoWriteToInput: styled.input`
    padding-left: 5px;
    width: 80%;
    font-size: 16px;
    border: 1px solid gray;
    border-radius: 5px;
  `,
  TodoButtonContainer: styled.div`
    button {
      span {
        font-size: 15px;
        font-weight: 800;
        color: gray;

        :hover {
          text-decoration: underline;
          color: black;
        }
      }
    }
  `,
};
