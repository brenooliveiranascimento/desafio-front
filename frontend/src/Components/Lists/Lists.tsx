import React, { useState } from 'react';
import './Lists.css';
import { useSelector } from 'react-redux';
import FilterBtn from '../FilterBtn/FilterBtn';
import NewFilterBtn from '../FilterBtn/NewFilterBtn';
import { heroModulesTypes } from '../../types/heroTypes';

function Lists() {
  const [addNewList, setAddNewList] = useState(false);
  const lists: Array<string> = Object.keys(useSelector(
    ({ herosModules }:heroModulesTypes) => herosModules.lists,
  ));
  return (
    <section className="filter_container">
      {lists && lists.map((filter) => <FilterBtn key={filter} filter={filter} />)}
      <section>
        <button
          onClick={() => setAddNewList(!addNewList)}
          className="filter_button"
          type="button"
        >
          <h1>{addNewList ? 'Cancelar' : 'Nova Lista'}</h1>
        </button>
        {addNewList && <NewFilterBtn setAddNewFilter={() => setAddNewList(false)} />}
      </section>
    </section>
  );
}

export default Lists;
