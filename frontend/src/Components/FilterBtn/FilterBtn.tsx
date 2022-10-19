import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createFilter, selectCurrFilter } from '../../redux/actions/herosActions';
import { heroModulesTypes } from '../../types/heroTypes';

interface filterType {
  filter: string;
}

function FilterBtn({ filter }: filterType) {
  const dispatch = useDispatch();
  const currFilter: string = useSelector(
    ({ herosModules }:heroModulesTypes) => herosModules.currFilter,
  );

  const selectFilter = (filterSelected: string) => {
    if (filterSelected === currFilter) return dispatch(selectCurrFilter(''));
    dispatch(selectCurrFilter(filterSelected));
  };

  return (
    <button
      key={filter}
      onClick={() => selectFilter(filter)}
      className="filter_button"
      type="button"
      style={{ backgroundColor: currFilter === filter ? '#371454' : 'rgba(0,0,0)' }}
    >
      <h1>{filter}</h1>
    </button>
  );
}

export default FilterBtn;
