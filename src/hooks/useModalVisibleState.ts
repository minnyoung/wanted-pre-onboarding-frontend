import { useState } from "react";

export default function useModalVisibleState() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  function changeIsModalVisible() {
    setIsModalVisible(!isModalVisible);
  }

  return { isModalVisible, setIsModalVisible, changeIsModalVisible };
}
