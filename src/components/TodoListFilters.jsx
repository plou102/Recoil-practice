import React from "react";
import { useRecoilState } from "recoil";
import { todoListFilterState } from "../atom/TodoListFilter";

export default function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  function updateFilter({ target: { value } }) {
    setFilter(value);
  }

  return (
    <>
      Filters:
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show UnCompleted">UnCompleted</option>
      </select>
    </>
  );
}
