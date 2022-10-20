import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createFilter } from '../../redux/actions/genericHeroActions';
import { heroModulesTypes } from '../../types/heroTypes';
import { getLocalStorage, updateLocalStore } from '../../utils/localStorageModel';
import ListBtn from './ListBtn';

interface propTypes {
  setAddNewFilter: () => void
}

function NewListBtn({ setAddNewFilter }: propTypes) {
  const [newFilterName, setNewFilterName] = useState('');
  const dispatch = useDispatch();
  const heroModules: heroModulesTypes = useSelector(
    ({ herosModules }:heroModulesTypes) => herosModules,
  );

  const addFilterInLocalStorage = () => {
    updateLocalStore('HEROS_LISTS', { ...heroModules.filters, [newFilterName]: [] });
  };

  const newFilter = () => {
    if (!newFilterName) return alert('Por favor Digite alguma coisa');
    addFilterInLocalStorage();
    dispatch(createFilter(newFilterName));
    setNewFilterName('');
    setAddNewFilter();
  };

  return (
    <section>
      <input
        value={newFilterName}
        onChange={({ target }) => setNewFilterName(target.value)}
      />
      <button onClick={newFilter} type="button">
        Adicionar
      </button>
    </section>
  );
}

export default NewListBtn;
