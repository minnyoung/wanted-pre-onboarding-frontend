import React, { useEffect } from "react";
import { toastStyle as S } from "../styles/toastStyle";

type ToastType = {
  message: string;
  isToastActive: boolean;
  fetchState: string;
  setIsToastShowing: (isToastShowing: boolean) => void;
};

export default function Toast({
  message,
  isToastActive,
  fetchState,
  setIsToastShowing,
}: ToastType) {
  useEffect(() => {
    let timer = setTimeout(() => setIsToastShowing(false), 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <>
      {isToastActive ? (
        <S.ToastContainer show={true} fetchState={fetchState}>
          <S.ToastMessage>
            <span className="material-symbols-outlined">error</span>
            {message}
          </S.ToastMessage>
        </S.ToastContainer>
      ) : (
        <S.ToastContainer show={false}></S.ToastContainer>
      )}
    </>
  );
}
