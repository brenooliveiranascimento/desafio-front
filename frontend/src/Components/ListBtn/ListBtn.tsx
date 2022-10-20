import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiTrash2 } from 'react-icons/fi';
import { selectCurrList, genericUpdateLists } from '../../redux/actions/genericHeroActions';
import { DELETE_LIST, REMOVE_LIST } from '../../redux/redux_types';
import { heroModulesTypes } from '../../types/heroTypes';
import './listBtn.css';
import { updateLocalStore } from '../../utils/localStorageModel';

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
    if (filterSelected === currList) return dispatch(selectCurrList(''));
    dispatch(selectCurrList(filterSelected));
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
      {list !== 'All' && (
        <button onClick={deleteList} className="delete_list_btn" type="button">
          <FiTrash2 />
        </button>
      )}
    </section>
  );
}

export default ListBtn;
