import React, { useEffect } from "react";
import useMakeEmail from "../hooks/useMakeEmail";
import useMakePassWord from "../hooks/useMakePassWord";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function SignUp() {
  const { userEmail, isConfirmEmail, handleEmailInput } = useMakeEmail();
  const { userPassWord, isConfirmPassWord, handlePassWordInput } =
    useMakePassWord();

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      navigate("/todo");
    }
  });

  async function handleSignUp() {
    await fetch("https://www.pre-onboarding-selection-task.shop/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: userEmail, password: userPassWord }),
    })
      .then((data) => {
        if (data.status === 201) {
          alert("회원가입이 완료되었습니다.");
          navigate("/signin");
        } else throw data.status;
      })
      .catch((error) =>
        alert(`회원가입 중 에러가 발생했습니다. \n에러코드 : ${error}`)
      );
  }

  return (
    <S.SignupContainer>
      <S.SignupLogoSpan>회원가입</S.SignupLogoSpan>
      <div>
        <S.SignupInputContainer>
          <span>이메일</span>
          <input
            placeholder="example@mail.com"
            data-testid="email-input"
            type="email"
            value={userEmail}
            onChange={handleEmailInput}
          />
        </S.SignupInputContainer>
        <S.SignupInputContainer>
          <span>비밀번호</span>
          <input
            placeholder="8자리 이상 입력해주세요."
            data-testid="password-input"
            type="password"
            value={userPassWord}
            onChange={handlePassWordInput}
          />
        </S.SignupInputContainer>
        <S.SignupButton
          data-testid="signup-button"
          type="button"
          disabled={!(isConfirmEmail && isConfirmPassWord)}
          onClick={handleSignUp}
        >
          회원가입
        </S.SignupButton>
        <S.SignupDescContainer>
          <span>계정이 있으신가요?</span>
          <Link to="/signin">로그인</Link>
        </S.SignupDescContainer>
        <S.SignupDescContainer>
          <Link to="/">홈으로가기</Link>
        </S.SignupDescContainer>
      </div>
    </S.SignupContainer>
  );
}

const S = {
  SignupContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  SignupLogoSpan: styled.span`
    margin-bottom: 30px;
    font-size: 30px;
    font-weight: 800;
  `,
  SignupInputContainer: styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 10px;
    width: 280px;

    span {
      width: 55px;
      font-size: 15px;
      text-align: center;
    }

    input {
      width: 180px;
      font-size: 18px;
      font-weight: 600;
      line-height: 1.5;
      border-bottom: 1px solid gray;
    }
  `,

  SignupButton: styled.button`
    margin: 20px 0;
    width: 100%;
    height: 35px;
    border: 1px solid gray;
    border-radius: 10px;
    :disabled {
      background-color: #b8b8b8;
      cursor: not-allowed;
      transition: 0.1s ease-in-out;
    }
    transition: 0.1s ease-in-out;
  `,
  SignupDescContainer: styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 5px;
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
