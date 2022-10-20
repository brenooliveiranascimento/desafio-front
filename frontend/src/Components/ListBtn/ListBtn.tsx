import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiTrash2 } from 'react-icons/fi';
import { selectCurrFilter, genericUpdateLists } from '../../redux/actions/genericHeroActions';
import { DELETE_LIST } from '../../redux/redux_types';
import { heroModulesTypes } from '../../types/heroTypes';
import './listBtn.css';

interface listType {
  list: string;
}

function ListBtn({ list }: listType) {
  const dispatch = useDispatch();
  const currFilter: string = useSelector(
    ({ herosModules }:heroModulesTypes) => herosModules.currFilter,
  );

  const selectFilter = (filterSelected: string) => {
    if (filterSelected === currFilter) return dispatch(selectCurrFilter(''));
    dispatch(selectCurrFilter(filterSelected));
  };

  const deleteList = () => {
    alert(list);
    dispatch(genericUpdateLists(DELETE_LIST, list));
  };

  return (
    <section className="list_btn_container">
      <button
        key={list}
        onClick={() => selectFilter(list)}
        className="filter_button"
        type="button"
        style={{ backgroundColor: currFilter === list ? '#371454' : 'rgba(0,0,0)' }}
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
