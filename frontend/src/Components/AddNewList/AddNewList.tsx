import React, { useState } from 'react';
import NewListBtn from './ListBtn/NewListBtn';

export default function AddNewList() {
  const [addNewList, setAddNewList] = useState(false);

  return (
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
  );
}
