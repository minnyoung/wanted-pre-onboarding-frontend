import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";

type SnackBarType = {
  message: string;
  isSnackBarActive: boolean;
  fetchState: string;
  setIsSnackBarShowing: (isSnackBarShowing: boolean) => void;
};

export default function SnackBar({
  message,
  isSnackBarActive,
  fetchState,
  setIsSnackBarShowing,
}: SnackBarType) {
  useEffect(() => {
    let timer = setTimeout(() => setIsSnackBarShowing(false), 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <>
      {isSnackBarActive ? (
        <S.SnackBarContainer show={true} fetchState={fetchState}>
          <S.SnackBarMessage>
            <span className="material-symbols-outlined">error</span>
            {message}
          </S.SnackBarMessage>
        </S.SnackBarContainer>
      ) : (
        <S.SnackBarContainer show={false}></S.SnackBarContainer>
      )}
    </>
  );
}

const S = {
  SnackBarContainer: styled.div<{ show: boolean; fetchState?: string }>`
    position: absolute;
    z-index: 999;
    visibility: ${({ show }) => (show ? "visible" : "hidden")};

    bottom: 20%;

    width: 300px;
    height: 50px;
    border-radius: 10px;
    background-color: ${({ fetchState }) =>
      fetchState === "error" ? "#ff5656" : "#21c92f"};

    animation: openSnackBar 0.07s linear;

    @keyframes openSnackBar {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  `,

  SnackBarMessage: styled.span`
    display: flex;
    align-items: center;
    padding-left: 20px;

    width: 100%;
    height: 100%;
    font-size: 13px;
    color: white;
    font-weight: 600;
    span {
      margin-right: 5px;
    }
  `,
};
