import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function TodoHeader() {
  const navigate = useNavigate();
  function handleSignOut() {
    localStorage.removeItem("userToken");
    navigate("/");
  }
  return (
    <S.TodoHeaderContainer>
      <button onClick={handleSignOut}>로그아웃</button>
    </S.TodoHeaderContainer>
  );
}

const S = {
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
