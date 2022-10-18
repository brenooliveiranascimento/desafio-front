import React, { useState } from 'react';
import './filters.css';
import { useDispatch, useSelector } from 'react-redux';
import { createFilter, selectCurrFilter } from '../../redux/actions/herosActions';
import FilterBtn from '../FilterBtn/FilterBtn';
import NewFilterBtn from '../FilterBtn/NewFilterBtn';

function Filters() {
  const [addNewFilter, setAddNewFilter] = useState(false);
  const filters = Object.keys(useSelector(({ herosModules }:any) => herosModules.filters));

  return (
    <section
      className="filter_container"
    >
      {
        filters && filters.map((filter) => <FilterBtn key={filter} filter={filter} />)
      }
      <section>
        <button
          onClick={() => setAddNewFilter(!addNewFilter)}
          className="filter_button"
          type="button"
        >
          <h1>{addNewFilter ? 'Cancelar' : 'Novo Filtro'}</h1>
        </button>

        {addNewFilter && <NewFilterBtn setAddNewFilter={() => setAddNewFilter(false)} />}
      </section>
    </section>
  );
}

export default Filters;
