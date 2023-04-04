import React from "react";

export default function Login() {
  return (
    <div>
      <span>로그인</span>
      <div>
        <input data-testid="email-input" type="text" />
        <input data-testid="password-input" type="text" />
        <button data-testid="signin-button" type="button">
          로그인
        </button>
      </div>
    </div>
  );
}
