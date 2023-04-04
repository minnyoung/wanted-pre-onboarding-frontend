import React from "react";
import useMakeEmail from "../hooks/useMakeEmail";
import useMakePassWord from "../hooks/useMakePassWord";

export default function Login() {
  const { userEmail, isConfirmEmail, handleEmailInput } = useMakeEmail();
  const { userPassWord, isConfirmPassWord, handlePassWordInput } =
    useMakePassWord();

  return (
    <div>
      <span>로그인</span>
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
          data-testid="signin-button"
          type="button"
          disabled={!(isConfirmEmail && isConfirmPassWord)}
        >
          로그인
        </button>
      </div>
    </div>
  );
}
