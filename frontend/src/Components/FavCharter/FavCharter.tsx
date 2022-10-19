import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilters } from '../../redux/actions/herosActions';
import { heroModulesTypes, heroTypes } from '../../types/heroTypes';
import { updateLocalStore } from '../../utils/localStorageModel';
import './favStyles.css';

interface currCharterTypes {
  currCharter: heroTypes
}

function FavCharter({ currCharter }: currCharterTypes) {
  const dispatch = useDispatch();
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

  const addCharter = (filterSelected: string) => {
    if (verifyCharterInCurrFilter(filterSelected)) {
      dispatch(updateFilters(Number(currCharter.id), filterSelected, 'REMOVE'));
      updateLocalStore('HEROS_FILTERS', filters);
      return;
    }
    dispatch(updateFilters(Number(currCharter.id), filterSelected, 'ADD'));
    updateLocalStore('HEROS_FILTERS', filters);
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
          <button
            onClick={() => addCharter(currFilter)}
            type="button"
            key={currFilter}
            className="filter_item_container"
          >
            <span>{currFilter}</span>
            <span>{verifyCharterInCurrFilter(currFilter) ? 'Remover' : 'Adicionar'}</span>
          </button>
        ))}
      </section>
      <section>
        <button className="show_fav_btn" onClick={() => setShowFavList(!showFavList)} type="button">Adicionar a alguma lista</button>
      </section>
    </section>
  );
}

export default FavCharter;
