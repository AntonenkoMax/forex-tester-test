import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useHandleData = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(inputValue);
  };

  const keyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      navigate(inputValue);
    }
  };

  return {
    inputValue,
    setInputValue,
    inputChangeHandler,
    submitHandler,
    keyDownHandler,
  };
};
