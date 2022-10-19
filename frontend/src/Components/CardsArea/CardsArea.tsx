import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { requestAllCharter, requestCharters } from '../../redux/actions/herosActions';

function CardsArea() {
  const dispatch = useDispatch();

  const herosInf = useSelector(({ herosModules }: any) => herosModules);
  const { currFilter, charter } = herosInf;

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
    <section>
      { charter.length ? charter.map((currCharter: any) => (
        <h1 key={currCharter.id}>{currCharter.name}</h1>
      ))
        : <h1>Nenhum personagem encontrado</h1> }
      <button onClick={loadMore} type="button">
        Load More
      </button>
    </section>
  );
}

export default CardsArea;
