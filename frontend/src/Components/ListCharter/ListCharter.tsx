import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilters } from '../../redux/actions/herosActions';
import { heroModulesTypes, heroTypes } from '../../types/heroTypes';
import { updateLocalStore } from '../../utils/localStorageModel';
import './listStyles.css';

interface currCharterTypes {
  currCharter: heroTypes
}

function ListCharter({ currCharter }: currCharterTypes) {
  const dispatch = useDispatch();
  const [showFavList, setShowFavList] = useState(false);

  const heroStore: heroModulesTypes = useSelector(
    ({ herosModules }: heroModulesTypes) => herosModules,
  );
  const { lists }: any = heroStore;

  const verifyCharterInCurrFilter = (currFilter: any) => {
    const checkCharter: any = lists[currFilter]
      .some((id: string) => Number(id) === Number(currCharter.id));
    return checkCharter;
  };

  const addCharter = (filterSelected: string) => {
    if (verifyCharterInCurrFilter(filterSelected)) {
      dispatch(updateFilters(Number(currCharter.id), filterSelected, 'REMOVE'));
      updateLocalStore('HEROS_LISTS', lists);
      return;
    }
    dispatch(updateFilters(Number(currCharter.id), filterSelected, 'ADD'));
    updateLocalStore('HEROS_LISTS', lists);
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
        {Object.keys(lists).map((currList: string) => {
          if (currList === 'All') return;
          return (
            <button
              style={{
                backgroundColor: verifyCharterInCurrFilter(currList) ? 'grey' : 'black',
              }}
              onClick={() => addCharter(currList)}
              type="button"
              key={currList}
              className="filter_item_container"
            >
              <span>{currList}</span>
              <span>{verifyCharterInCurrFilter(currList) ? 'Remover' : 'Adicionar'}</span>
            </button>
          );
        })}
      </section>
      <section>
        <button className="show_fav_btn" onClick={() => setShowFavList(!showFavList)} type="button">Adicionar a alguma lista</button>
      </section>
    </section>
  );
}

export default ListCharter;
