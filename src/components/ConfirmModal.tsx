import React from "react";
import styled from "styled-components";

type ConfirmModalType = {
  todoId: number;
  userToken: string | null;
  setIsModalVisible: (isVisible: boolean) => void;
  onDeleteTodo: (userToken: string | null, todoId: number) => Promise<void>;
};

export default function ConfirmModal({
  todoId,
  userToken,
  setIsModalVisible,
  onDeleteTodo,
}: ConfirmModalType) {
  return (
    <S.ModalContainer>
      <S.Modal>
        <S.ModalText>삭제하시겠습니까?</S.ModalText>
        <S.ModalButtonContainer>
          <S.ModalButton
            contents="cancle"
            onClick={() => setIsModalVisible(false)}
          >
            취소
          </S.ModalButton>
          <S.ModalButton
            contents=""
            onClick={() => onDeleteTodo(userToken, todoId)}
          >
            삭제
          </S.ModalButton>
        </S.ModalButtonContainer>
      </S.Modal>
    </S.ModalContainer>
  );
}

const S = {
  ModalContainer: styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 100;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #0000002e;
  `,
  Modal: styled.div`
    margin: auto 0;
    padding: 3rem 6rem;
    border-radius: 10px;
    background-color: #fcfcfc;
  `,
  ModalText: styled.span`
    font-weight: 600;
  `,
  ModalButtonContainer: styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
  `,
  ModalButton: styled.button<{ contents: string }>`
    padding: 8px 15px;
    font-size: 13px;
    background-color: ${({ contents }) =>
      contents === "cancle" ? "" : "#ed4646"};
    color: ${({ contents }) => (contents === "cancle" ? "" : "#f6f6f6")};
    font-weight: ${({ contents }) => (contents === "cancle" ? "" : "600")};
    border-radius: 15px;
    transition: 0.1s ease-in-out;
    :hover {
      transition: 0.1s ease-in-out;
      color: #ffffff;
      background-color: ${({ contents }) =>
        contents === "cancle" ? "gray" : "#b03838"};
    }
  `,
};
