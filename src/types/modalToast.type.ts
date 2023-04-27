export type ConfirmModalType = {
  todoId: number;
  userToken: string | null;
  setIsModalVisible: (isVisible: boolean) => void;
  onDeleteTodo: (userToken: string | null, todoId: number) => Promise<void>;
};

export type ToastType = {
  message: string;
  isToastActive: boolean;
  fetchState: string;
  setIsToastShowing: (isToastShowing: boolean) => void;
};
