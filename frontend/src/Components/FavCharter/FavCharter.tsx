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
  const { filters }: any = heroStore;

  const verifyCharterInCurrFilter = (currFilter: any) => {
    const checkCharter: any = filters[currFilter]
      .some((id: string) => Number(id) === Number(currCharter.id));
    return checkCharter;
  };

  return (
    <section className="fav_container">
      <section
        style={{
          marginTop: !showFavList ? '11rem' : '-7rem',
        }}
        className="favList_container"
      >
        <button className="close_btn" onClick={() => setShowFavList(!showFavList)} type="button">Fechar</button>
        {Object.keys(filters).map((currFilter: string) => (
          <section className="filter_item_container">
            <span>{currFilter}</span>
            <span>{verifyCharterInCurrFilter(currFilter) ? 'x' : 'o'}</span>
          </section>
        ))}
      </section>
      <section>
        <button className="show_fav_btn" onClick={() => setShowFavList(!showFavList)} type="button">Adicionar a alguma lista</button>
      </section>
    </section>
  );
}

export default FavCharter;
