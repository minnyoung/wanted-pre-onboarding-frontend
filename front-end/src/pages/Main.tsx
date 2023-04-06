import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      navigate("/todo");
    }
  });

  return (
    <div>
      <span>TODO</span>
      <span>: 오늘의 할 일</span>
      <Link to="/signin">로그인</Link>
      <Link to="/signup">회원가입</Link>
    </div>
  );
}
