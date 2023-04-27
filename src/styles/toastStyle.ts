import styled from "styled-components";

export const toastStyle = {
  ToastContainer: styled.div<{ show: boolean; fetchState?: string }>`
    position: absolute;
    z-index: 999;
    visibility: ${({ show }) => (show ? "visible" : "hidden")};

    bottom: 20%;

    width: 300px;
    height: 50px;
    border-radius: 10px;
    background-color: ${({ fetchState }) =>
      fetchState === "error" ? "#ff5656" : "#21c92f"};

    animation: openToast 0.07s linear;

    @keyframes openToast {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  `,

  ToastMessage: styled.span`
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
