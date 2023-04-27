import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { mainPageStyle as S } from "../styles/mainPageStyle";

export default function Main() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      navigate("/todo");
    }
  });

  return (
    <div>
      <S.TodoSpanContainer>
        <S.TodoSpan>TODO</S.TodoSpan>
        <S.TodoDescSpan>오늘의 할 일</S.TodoDescSpan>
      </S.TodoSpanContainer>
      <S.MainButtonContainer>
        <S.MainLink>
          <Link to="/signin">로그인</Link>
        </S.MainLink>
        <S.MainLink>
          <Link to="/signup">회원가입</Link>
        </S.MainLink>
      </S.MainButtonContainer>
    </div>
  );
}
