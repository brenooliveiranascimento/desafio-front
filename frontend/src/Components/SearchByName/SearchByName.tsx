import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchCharterByName } from '../../redux/actions/herosActions';

function SearchByName() {
  const dispatch = useDispatch();
  const [charterName, setCharterName] = useState('');

  const searchByName = () => {
    if (!charterName) return alert('Por favor Digite alguma coisa!');
    dispatch(searchCharterByName(charterName));
  };
  return (
    <section className="search_by_name_area">
      <span>Pesquisar pelo nome</span>
      <article>
        <input onChange={({ target }) => setCharterName(target.value)} value={charterName} />
        <button onClick={searchByName} type="button">
          Pesquisar
        </button>
      </article>
    </section>
  );
}

export default SearchByName;
