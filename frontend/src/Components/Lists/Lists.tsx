import React, { useState } from 'react';
import './Lists.css';
import { useDispatch, useSelector } from 'react-redux';
import ListBtn from '../ListBtn/ListBtn';
import NewListBtn from '../ListBtn/NewListBtn';
import { heroModulesTypes } from '../../types/heroTypes';
import { searchCharterByName } from '../../redux/actions/herosActions';
import SearchByName from '../SearchByName/SearchByName';

function Lists() {
  const [addNewList, setAddNewList] = useState(false);
  const [charterName, setCharterName] = useState('');
  const dispatch = useDispatch();

  const lists: Array<string> = Object.keys(useSelector(
    ({ herosModules }:heroModulesTypes) => herosModules.lists,
  ));

  return (
    <section className="filter_container">
      <section style={{ display: 'flex', flexWrap: 'wrap' }}>
        {lists && lists.map((list) => <ListBtn key={list} list={list} />)}

      </section>

      <SearchByName />
      <section>
        <button
          onClick={() => setAddNewList(!addNewList)}
          className="filter_button"
          type="button"
        >
          <h1>{addNewList ? 'Cancelar' : 'Nova Lista'}</h1>
        </button>
        {addNewList && <NewListBtn setAddNewFilter={() => setAddNewList(false)} />}
      </section>
    </section>
  );
}

export default Lists;
