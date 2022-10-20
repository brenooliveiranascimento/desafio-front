import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { requestAllCharter, requestCharters } from '../../redux/actions/requestHerosActions';
import { heroModulesTypes, heroTypes } from '../../types/heroTypes';
import Cards from '../Cards/Cards';
import './cardsAreaStyles.css';

function CardsArea() {
  const dispatch = useDispatch();

  const herosInf: heroModulesTypes = useSelector(
    ({ herosModules }: heroModulesTypes) => herosModules,
  );
  const { currList, charter, load } = herosInf;

  const fetchCharter = async () => {
    dispatch(requestCharters());
  };

  const loadMore = () => {
    dispatch(requestAllCharter());
  };

  useEffect(() => {
    fetchCharter();
  }, [currList]);

  return (
    <section className="cardsArea_container">
      {
        load && currList !== 'All' ? 'Loading' : (
          <section className="card_area">
            { charter.length ? charter.map((currCharter: heroTypes) => (
              <Cards key={currCharter.id} currCharter={currCharter} />
            ))
              : <h1>{currList !== 'All' && 'Nenhum personagem encontrado'}</h1> }
          </section>
        )
      }
      {currList === 'All' && (
      <button onClick={loadMore} type="button">
        {load ? 'Loading...' : 'Load More'}
      </button>
      )}
    </section>
  );
}

export default CardsArea;
