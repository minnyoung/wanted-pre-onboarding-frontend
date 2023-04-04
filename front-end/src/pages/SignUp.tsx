import React from "react";
import useMakeEmail from "../hooks/useMakeEmail";
import useMakePassWord from "../hooks/useMakePassWord";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const { userEmail, isConfirmEmail, handleEmailInput } = useMakeEmail();
  const { userPassWord, isConfirmPassWord, handlePassWordInput } =
    useMakePassWord();

  const navigate = useNavigate();

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
    <div>
      <span>회원가입</span>
      <div>
        <input
          data-testid="email-input"
          type="email"
          value={userEmail}
          onChange={handleEmailInput}
        />
        <input
          data-testid="password-input"
          type="password"
          value={userPassWord}
          onChange={handlePassWordInput}
        />
        <button
          data-testid="signup-button"
          type="button"
          disabled={!(isConfirmEmail && isConfirmPassWord)}
          onClick={handleSignUp}
        >
          회원가입
        </button>
      </div>
    </div>
  );
}
