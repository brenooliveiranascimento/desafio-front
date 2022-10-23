import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { genericUpdateLists } from '../../../redux/actions/genericHeroActions';
import { CREATE_LIST } from '../../../redux/redux_types';
import { heroModulesTypes } from '../../../types/heroTypes';
import { updateLocalStore } from '../../../utils/localStorageModel';

interface propTypes {
  setAddNewList: () => void
}

function NewListBtn({ setAddNewList }: propTypes) {
  const [newListName, setNewListName] = useState('');
  const dispatch = useDispatch();
  const heroModules: heroModulesTypes = useSelector(
    ({ herosModules }:heroModulesTypes) => herosModules,
  );

  const addListInLocalStorage = () => {
    updateLocalStore('HEROS_LISTS', { ...heroModules.filters, [newListName]: [] });
  };

  const newList = () => {
    if (!newListName) return alert('Por favor Digite alguma coisa');
    addListInLocalStorage();
    dispatch(genericUpdateLists(CREATE_LIST, newListName));
    setNewListName('');
    setAddNewList();
  };

  return (
    <section>
      <input
        value={newListName}
        onChange={({ target }) => setNewListName(target.value)}
      />
      <button onClick={newList} type="button">
        Adicionar
      </button>
    </section>
  );
}

export default NewListBtn;
