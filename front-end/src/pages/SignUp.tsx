import React from "react";

export default function SignUp() {
  return (
    <div>
      <span>회원가입</span>
      <div>
        <input data-testid="email-input" type="email" />
        <input data-testid="password-input" type="password" />
        <button data-testid="signup-button" type="button">
          회원가입
        </button>
      </div>
    </div>
  );
}
