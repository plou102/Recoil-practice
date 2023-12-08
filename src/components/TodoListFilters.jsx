import React from "react";
import { useRecoilState } from "recoil";
import { todoListFilterState } from "../atom/TodoListFilter";
import styled from "styled-components";

export default function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  function updateFilter({ target: { value } }) {
    setFilter(value);
  }

  return (
    <>
      Filters :
      <FilterSelect value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show UnCompleted">UnCompleted</option>
      </FilterSelect>
    </>
  );
}

const FilterSelect = styled.select`
  margin: 0 5px;
`;
