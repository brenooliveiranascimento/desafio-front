import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createFilter, selectCurrFilter } from '../../redux/actions/herosActions';
import FilterBtn from './FilterBtn';

interface propTypes {
  setAddNewFilter: () => void
}

function NewFilterBtn({ setAddNewFilter }: propTypes) {
  const [newFilterName, setNewFilterName] = useState('');
  const dispatch = useDispatch();

  const addFilterInLocalStorafe = () => {
  };

  const newFilter = () => {
    if (!newFilterName) return alert('Por favor Digite alguma coisa');
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

export default NewFilterBtn;
