import React from "react";
import { atom, useRecoilValue } from "recoil";
import TodoItemCreator from "./components/TodoItemCreator";
import TodoItem from "./components/TodoItem";

export const todoListState = atom({
  key: "todoListState",
  default: [],
});

export default function TodoList() {
  const todoList = useRecoilValue(todoListState);

  return (
    <>
      {/* <TodoListStats /> */}
      {/* <TodoListFilters /> */}
      <TodoItemCreator />

      {todoList.map((item) => {
        return <TodoItem key={item.id} item={item} />;
      })}
    </>
  );
}
