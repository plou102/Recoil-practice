import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../TodoList";

export default function TodoItemCreator() {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  return (
    <>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </>
  );
}
