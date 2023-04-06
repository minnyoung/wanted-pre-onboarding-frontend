import React, { useEffect } from "react";
import useMakeEmail from "../hooks/useMakeEmail";
import useMakePassWord from "../hooks/useMakePassWord";
import { Link, useNavigate } from "react-router-dom";

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
    <div>
      <span>로그인</span>
      <span>계정이 없으신가요?</span>
      <Link to="/signup">회원가입</Link>
      <div>
        <input
          placeholder="이메일을 입력해주세요."
          data-testid="email-input"
          type="email"
          value={userEmail}
          onChange={handleEmailInput}
        />
        <input
          placeholder="비밀번호를 입력해주세요."
          data-testid="password-input"
          type="password"
          value={userPassWord}
          onChange={handlePassWordInput}
        />
        <button
          data-testid="signin-button"
          type="button"
          disabled={!(isConfirmEmail && isConfirmPassWord)}
          onClick={handleSignIn}
        >
          로그인
        </button>
      </div>
    </div>
  );
}
