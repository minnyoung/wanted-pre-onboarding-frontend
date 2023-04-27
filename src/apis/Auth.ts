import { NavigateFunction } from "react-router-dom";
import { BASE_URL } from "./const";

export async function handleSignIn(
  userEmail: string,
  userPassWord: string,
  navigate: NavigateFunction
) {
  try {
    const response = await fetch(`${BASE_URL}/auth/signin`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: userEmail, password: userPassWord }),
    });
    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message);
    }
    const responseData = await response.json();
    localStorage.setItem("userToken", responseData.access_token);
    navigate("/todo");
    return { message: "로그인 되었습니다." };
  } catch (error) {
    console.error("Error", error);
    return { message: "로그인 도중 에러가 발생했습니다.", error };
  }
}

export async function handleSignUp(
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
      const errorResponse = await response.json();
      throw new Error(errorResponse.message);
    }
    navigate("/signin");
    return { message: "회원가입이 완료되었습니다." };
  } catch (error) {
    console.error("Error", error);
    return { message: "회원가입 중 에러가 발생했습니다.", error };
  }
}
