import React from "react";
import { useRecoilValue } from "recoil";
import TodoItemCreator from "./components/TodoItemCreator";
import TodoItem from "./components/TodoItem";
import TodoListStats from "./components/TodoListStats";
import TodoListFilters from "./components/TodoListFilters";
import { filteredTodoListState } from "./atom/TodoListFilter";
import styled from "styled-components";

export default function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      <ItemWrapper>
        {todoList.map((item) => {
          return <TodoItem key={item.id} item={item} />;
        })}
      </ItemWrapper>
    </>
  );
}

const ItemWrapper = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
