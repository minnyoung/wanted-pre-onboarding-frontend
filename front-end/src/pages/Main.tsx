import React from "react";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <div>
      <span>TODO</span>
      <span>: 오늘의 할 일</span>
      <Link to="/signin">로그인</Link>
      <Link to="/signup">회원가입</Link>
    </div>
  );
}
