import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

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

const S = {
  TodoSpanContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  TodoSpan: styled.span`
    font-size: 45px;
    font-weight: 800;
  `,

  TodoDescSpan: styled.span`
    color: gray;
    font-size: 13px;
  `,

  MainButtonContainer: styled.div`
    display: flex;
    justify-content: space-between;

    margin-top: 50px;
    width: 150px;
  `,

  MainLink: styled.a`
    :hover {
      font-weight: 600;
    }
  `,
};
