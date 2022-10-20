import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiTrash2 } from 'react-icons/fi';
import './listBtn.css';
import { heroModulesTypes } from '../../../types/heroTypes';
import { genericUpdateLists } from '../../../redux/actions/genericHeroActions';
import { updateLocalStore } from '../../../utils/localStorageModel';
import { REMOVE_LIST, SELECT_LIST } from '../../../redux/redux_types';

interface listType {
  list: string;
}

function ListBtn({ list }: listType) {
  const dispatch = useDispatch();
  const currList: string = useSelector(
    ({ herosModules }:heroModulesTypes) => herosModules.currList,
  );

  const allLists: any = useSelector(
    ({ herosModules }:heroModulesTypes) => herosModules.lists,
  );

  const selectFilter = (filterSelected: string) => {
    if (filterSelected === currList) return dispatch(genericUpdateLists(SELECT_LIST, ''));
    dispatch(genericUpdateLists(SELECT_LIST, filterSelected));
  };

  const deleteList = () => {
    const newList = { ...allLists };
    delete newList[list];
    updateLocalStore('HEROS_LISTS', newList);
    dispatch(genericUpdateLists(REMOVE_LIST, newList));
  };

  return (
    <section className="list_btn_container">
      <button
        key={list}
        onClick={() => selectFilter(list)}
        className="filter_button"
        type="button"
        style={{ backgroundColor: currList === list ? '#371454' : 'rgba(0,0,0)' }}
      >
        <h1>{list}</h1>
      </button>
      <button
        disabled={list === 'All'}
        onClick={deleteList}
        className="delete_list_btn"
        type="button"
      >
        <FiTrash2 />
      </button>
    </section>
  );
}

export default ListBtn;
