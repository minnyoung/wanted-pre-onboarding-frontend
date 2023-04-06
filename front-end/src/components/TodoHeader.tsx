import { useNavigate } from "react-router-dom";

export default function TodoHeader() {
  const navigate = useNavigate();
  function handleSignOut() {
    localStorage.removeItem("userToken");
    navigate("/");
  }
  return (
    <div>
      <span onClick={handleSignOut}>로그아웃</span>
    </div>
  );
}
