import React, { useState } from 'react';
import './filters.css';
import { useDispatch, useSelector } from 'react-redux';
import { createFilter, selectCurrFilter } from '../../redux/actions/herosActions';
import FilterBtn from '../FilterBtn/FilterBtn';

function Filters() {
  const [newFilterName, setNewFilterName] = useState('');
  const [addNewFilter, setAddNewFilter] = useState(false);
  const dispatch = useDispatch();
  const filters = Object.keys(useSelector(({ herosModules }:any) => herosModules.filters));

  const newFilter = () => {
    if (!newFilterName) return alert('Por favor Digite alguma coisa');
    dispatch(createFilter(newFilterName));
    setNewFilterName('');
    setAddNewFilter(false);
  };

  return (
    <section
      className="filter_container"
    >
      {
        filters && filters.map((filter) => (
          <FilterBtn filter={filter} />
        ))
      }
      <section>
        <button
          onClick={() => setAddNewFilter(!addNewFilter)}
          className="filter_button"
          type="button"
        >
          <h1>{addNewFilter ? 'Cancelar' : 'Novo Filtro'}</h1>
        </button>
        {addNewFilter && (
          <section>
            <input
              value={newFilterName}
              onChange={({ target }) => setNewFilterName(target.value)}
            />
            <button onClick={newFilter} type="button">
              Adicionar
            </button>
          </section>
        )}
      </section>
    </section>
  );
}

export default Filters;
