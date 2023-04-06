import React, { useEffect } from "react";
import useMakeEmail from "../hooks/useMakeEmail";
import useMakePassWord from "../hooks/useMakePassWord";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Login() {
  const { userEmail, isConfirmEmail, handleEmailInput } = useMakeEmail();
  const { userPassWord, isConfirmPassWord, handlePassWordInput } =
    useMakePassWord();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      navigate("/todo");
    }
  });

  async function handleSignIn() {
    await fetch("https://www.pre-onboarding-selection-task.shop/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: userEmail, password: userPassWord }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.access_token) {
          localStorage.setItem("userToken", data.access_token);
          alert("로그인되었습니다.");
          navigate("/todo");
        } else throw data.message;
      })
      .catch((error) =>
        alert(`로그인 중 에러가 발생했습니다. \n에러내용: ${error}`)
      );
  }

  return (
    <S.LoginContainer>
      <S.LoginLogoSpan>로그인</S.LoginLogoSpan>
      <div>
        <S.LoginInputContainer>
          <span>이메일</span>
          <input
            placeholder="example@mail.com"
            data-testid="email-input"
            type="email"
            value={userEmail}
            onChange={handleEmailInput}
          />
        </S.LoginInputContainer>
        <S.LoginInputContainer>
          <span>비밀번호</span>
          <input
            placeholder="비밀번호"
            data-testid="password-input"
            type="password"
            value={userPassWord}
            onChange={handlePassWordInput}
          />
        </S.LoginInputContainer>
        <S.LoginButton
          data-testid="signin-button"
          type="button"
          disabled={!(isConfirmEmail && isConfirmPassWord)}
          onClick={handleSignIn}
        >
          로그인
        </S.LoginButton>
        <S.LoginDescContainer>
          <span>계정이 없으신가요?</span>
          <Link to="/signup">회원가입</Link>
        </S.LoginDescContainer>
      </div>
    </S.LoginContainer>
  );
}

const S = {
  LoginContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  LoginLogoSpan: styled.span`
    margin-bottom: 20px;
    font-size: 30px;
    font-weight: 800;
  `,
  LoginInputContainer: styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 6px;
    width: 220px;

    span {
      width: 55px;
      font-size: 15px;
      text-align: center;
    }

    input {
      width: 140px;
      font-size: 14px;
      font-weight: 600;
    }
  `,

  LoginButton: styled.button`
    margin: 10px 0;
    width: 100%;
    height: 35px;
    border: 1px solid gray;
    border-radius: 10px;
    :hover {
      background-color: #f0f0f0;
      transition: 0.1s ease-in-out;
    }
  `,
  LoginDescContainer: styled.div`
    display: flex;
    justify-content: center;
    font-size: 13px;
    gap: 5px;
    span {
      color: gray;
    }
    a {
      :hover {
        text-decoration: underline;
      }
    }
  `,
};
