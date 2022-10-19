import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { heroModulesTypes, heroTypes } from '../../types/heroTypes';
import './favStyles.css';

interface currCharterTypes {
  currCharter: heroTypes
}

function FavCharter({ currCharter }: currCharterTypes) {
  const [showFavList, setShowFavList] = useState(false);

  const heroStore: heroModulesTypes = useSelector(
    ({ herosModules }: heroModulesTypes) => herosModules,
  );

  const { filters } = heroStore;
  return (
    <section className="fav_container">

      {showFavList ? (
        <section className="favList_container">
          <button onClick={() => setShowFavList(!showFavList)} type="button">Fechar</button>
          {Object.keys(filters).map((currFilter: string) => (
            <span>{currFilter}</span>
          ))}
        </section>
      ) : (
        <section>
          <button onClick={() => setShowFavList(!showFavList)} type="button">Adicionar a alguma lista</button>
        </section>
      )}
    </section>
  );
}

export default FavCharter;
