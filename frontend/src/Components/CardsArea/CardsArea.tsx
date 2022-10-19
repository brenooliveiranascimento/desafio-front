import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { requestAllCharter, requestCharters } from '../../redux/actions/herosActions';
import { heroModulesTypes, heroTypes } from '../../types/heroTypes';
import Cards from '../Cards/Cards';
import './cardsAreaStyles.css';

function CardsArea() {
  const dispatch = useDispatch();

  const herosInf: heroModulesTypes = useSelector(
    ({ herosModules }: heroModulesTypes) => herosModules,
  );
  const { currFilter, charter, load } = herosInf;

  const fetchCharter = async () => {
    dispatch(requestCharters());
  };

  const loadMore = () => {
    dispatch(requestAllCharter());
  };

  useEffect(() => {
    fetchCharter();
  }, [currFilter]);

  return (
    <section className="cardsArea_container">
      {
        load && currFilter !== 'All' ? 'Loading' : (
          <section className="card_area">
            { charter.length ? charter.map((currCharter: heroTypes) => (
              <Cards currCharter={currCharter} />
            ))
              : <h1>{currFilter !== 'All' && 'Nenhum personagem encontrado'}</h1> }
          </section>
        )
      }
      {currFilter === 'All' && (
      <button onClick={loadMore} type="button">
        {load ? 'Loading...' : 'Load More'}
      </button>
      )}
    </section>
  );
}

export default CardsArea;
