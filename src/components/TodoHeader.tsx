import { useNavigate } from "react-router-dom";
import { todoHeaderStyle as S } from "../styles/todoStyle";

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
