import React from 'react';
import './filters.css';
import { useSelector } from 'react-redux';

function Filters() {
  const filters = Object.keys(useSelector(({ herosModules }:any) => herosModules.filters));
  const currFilter = useSelector(({ herosModules }:any) => herosModules.currFilter);
  return (
    <section className="filter_container">
      {
        filters && filters.map((filter) => (
          <button
            className="filter_button"
            type="button"
            style={{ backgroundColor: currFilter === filter ? '#371454' : 'rgba(0,0,0)' }}
          >
            <h1>{filter}</h1>
          </button>
        ))
      }
    </section>
  );
}

export default Filters;
