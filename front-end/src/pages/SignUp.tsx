import React from "react";
import useMakeEmail from "../hooks/useMakeEmail";
import useMakePassWord from "../hooks/useMakePassWord";

export default function SignUp() {
  const { userEmail, isConfirmEmail, handleEmailInput } = useMakeEmail();
  const { userPassWord, isConfirmPassWord, handlePassWordInput } =
    useMakePassWord();

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
        >
          회원가입
        </button>
      </div>
    </div>
  );
}
