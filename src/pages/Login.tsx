import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useMakeEmail from "../hooks/useMakeEmail";
import useMakePassWord from "../hooks/useMakePassWord";
import { fetchSignIn } from "../apis/authApis";
import Toast from "../components/Toast";
import { GlobalContext } from "../provider/GlobalProvider";
import { loginPageStyle as S } from "../styles/loginPageStyle";

export default function Login() {
  const { userEmail, isConfirmEmail, handleEmailInput } = useMakeEmail();
  const { userPassWord, isConfirmPassWord, handlePassWordInput } =
    useMakePassWord();
  const navigate = useNavigate();
  const globalState = useContext(GlobalContext);

  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      navigate("/todo");
    }
  });

  async function handleSignIn() {
    const { error, message } = await fetchSignIn(userEmail, userPassWord);
    if (error) {
      globalState.setFetchState("error");
      globalState.setFetchMessage(message);
    } else {
      navigate("/todo");
      globalState.setFetchState("success");
      globalState.setFetchMessage(message);
    }
    globalState.setIsToastActive(true);
  }

  return (
    <>
      {globalState.isToastActive && (
        <Toast
          isToastActive={globalState.isToastActive}
          setIsToastShowing={globalState.setIsToastActive}
          fetchState={globalState.fetchState}
          message={globalState.fetchMessage}
        />
      )}
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
          <S.LoginDescContainer>
            <Link to="/">홈으로가기</Link>
          </S.LoginDescContainer>
        </div>
      </S.LoginContainer>
    </>
  );
}
