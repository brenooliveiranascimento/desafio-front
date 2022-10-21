import React, { useState } from 'react';
import NewListBtn from './ListBtn/NewListBtn';
import './newList.css';

export default function AddNewList() {
  const [addNewList, setAddNewList] = useState(false);

  return (
    <section className="newList_container">
      <button
        onClick={() => setAddNewList(!addNewList)}
        className="filter_button"
        type="button"
      >
        <h1>{addNewList ? 'Cancelar' : 'Nova Lista'}</h1>
      </button>
      {addNewList && <NewListBtn setAddNewList={() => setAddNewList(false)} />}
    </section>
  );
}
