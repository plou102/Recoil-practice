import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../atom/TodoList";

let id = 0;
function getId() {
  return id++;
}

export default function TodoItemCreator() {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  function inputChange({ target: { value } }) {
    setInputValue(value);
  }

  function addItem() {
    setTodoList((oldList) => [
      ...oldList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue("");
  }

  return (
    <>
      <input type="text" value={inputValue} onChange={inputChange} />
      <button onClick={addItem}>Add</button>
    </>
  );
}
