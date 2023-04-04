import React, { useState } from "react";

export default function useMakePassWord() {
  const [userPassWord, setUserPassWord] = useState("");
  const [isConfirmPassWord, setIsConfirmPassWord] = useState(false);

  function handlePassWordInput(event: React.ChangeEvent<HTMLInputElement>) {
    setUserPassWord(event.currentTarget.value);
    checkPassWord(event.currentTarget.value);
  }

  function checkPassWord(userPassWord: string) {
    if (userPassWord.length >= 8) {
      setIsConfirmPassWord(true);
    } else setIsConfirmPassWord(false);
  }

  return { userPassWord, isConfirmPassWord, handlePassWordInput };
}
