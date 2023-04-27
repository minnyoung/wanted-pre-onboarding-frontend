import { NavigateFunction } from "react-router-dom";
import { BASE_URL } from "./const";

export async function fetchSignIn(userEmail: string, userPassWord: string) {
  try {
    const response = await fetch(`${BASE_URL}/auth/signin`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: userEmail, password: userPassWord }),
    });
    if (!response.ok) {
      throw response.status;
    }
    const responseData = await response.json();
    localStorage.setItem("userToken", responseData.access_token);
    return { message: "로그인 되었습니다." };
  } catch (error) {
    if (error === 401) {
      return {
        error,
        message: "이메일 혹은 비밀번호가 틀렸습니다.",
      };
    }
    return {
      error,
      message: "로그인 중 에러가 발생했습니다.",
    };
  }
}

export async function fetchSignUp(
  userEmail: string,
  userPassWord: string,
  navigate: NavigateFunction
) {
  try {
    const response = await fetch(`${BASE_URL}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: userEmail, password: userPassWord }),
    });
    if (!response.ok) {
      throw response.status;
    }
    navigate("/signin");
    return { message: "회원가입이 완료되었습니다." };
  } catch (error) {
    if (error === 400) {
      return {
        error,
        message: "존재하는 이메일입니다. 다시 입력해주세요.",
      };
    }
    return {
      error,
      message: "회원가입 중 에러가 발생했습니다.",
    };
  }
}
