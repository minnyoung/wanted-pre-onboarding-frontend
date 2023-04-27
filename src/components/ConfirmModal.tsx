import React from "react";
import { ConfirmModalType } from "../types/modalToast.type";
import { confirmModalStyle as S } from "../styles/confirmModalStyle";

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
