import React from 'react';
import './Lists.css';
import { useSelector } from 'react-redux';
import { heroModulesTypes } from '../../types/heroTypes';
import SearchByName from '../SearchByName/SearchByName';
import AddNewList from '../AddNewList/AddNewList';
import ListBtn from '../AddNewList/ListBtn/ListBtn';

function Lists() {
  const lists: Array<string> = Object.keys(useSelector(
    ({ herosModules }:heroModulesTypes) => herosModules.lists,
  ));

  return (
    <section className="filter_container">
      <section style={{ display: 'flex', flexWrap: 'wrap' }}>
        {lists && lists.map((list) => <ListBtn key={list} list={list} />)}
      </section>
      <SearchByName />
      <AddNewList />
    </section>
  );
}

export default Lists;
