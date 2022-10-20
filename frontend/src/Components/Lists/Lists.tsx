import React, { useState } from 'react';
import './Lists.css';
import { useDispatch, useSelector } from 'react-redux';
import ListBtn from '../ListBtn/ListBtn';
import NewListBtn from '../ListBtn/NewListBtn';
import { heroModulesTypes } from '../../types/heroTypes';
import { searchCharterByName } from '../../redux/actions/herosActions';

function Lists() {
  const [addNewList, setAddNewList] = useState(false);
  const [charterName, setCharterName] = useState('');
  const dispatch = useDispatch();

  const lists: Array<string> = Object.keys(useSelector(
    ({ herosModules }:heroModulesTypes) => herosModules.lists,
  ));

  const searchByName = () => {
    if (!charterName) return alert('Por favor Digite alguma coisa!');
    dispatch(searchCharterByName(charterName));
  };

  return (
    <section className="filter_container">
      {lists && lists.map((list) => <ListBtn key={list} list={list} />)}
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
      <section>
        <span>Pesquisar pelo nome</span>
        <input onChange={({ target }) => setCharterName(target.value)} value={charterName} />
        <button onClick={searchByName} type="button">
          Pesquisar
        </button>
      </section>
    </section>
  );
}

export default Lists;
