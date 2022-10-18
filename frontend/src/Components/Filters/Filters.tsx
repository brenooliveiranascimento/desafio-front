import React, { useState } from 'react';
import './filters.css';
import { useDispatch, useSelector } from 'react-redux';
import { createFilter, selectCurrFilter } from '../../redux/actions/herosActions';

function Filters() {
  const [newFilterName, setNewFilterName] = useState('');
  const [addNewFilter, setAddNewFilter] = useState(false);
  const dispatch = useDispatch();
  const filters = Object.keys(useSelector(({ herosModules }:any) => herosModules.filters));
  const currFilter = useSelector(({ herosModules }:any) => herosModules.currFilter);

  const selectFilter = (filter: string) => {
    if (filter === currFilter) return dispatch(selectCurrFilter(''));
    dispatch(selectCurrFilter(filter));
  };

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
          <button
            key={filter}
            onClick={() => selectFilter(filter)}
            className="filter_button"
            type="button"
            style={{ backgroundColor: currFilter === filter ? '#371454' : 'rgba(0,0,0)' }}
          >
            <h1>{filter}</h1>
          </button>
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
