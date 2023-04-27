import React, { useContext, useEffect } from "react";
import useMakeEmail from "../hooks/useMakeEmail";
import useMakePassWord from "../hooks/useMakePassWord";
import { Link, useNavigate } from "react-router-dom";
import { fetchSignUp } from "../apis/authApis";
import Toast from "../components/Toast";
import { GlobalContext } from "../provider/GlobalProvider";
import { signUpStyle as S } from "../styles/signUpStyle";

export default function SignUp() {
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

  async function handleSignUp() {
    const { error, message } = await fetchSignUp(
      userEmail,
      userPassWord,
      navigate
    );
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
    </>
  );
}
