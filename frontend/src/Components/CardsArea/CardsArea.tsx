import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { requestCharters } from '../../redux/actions/herosActions';

function CardsArea() {
  const herosInf = useSelector(({ herosModules }: any) => herosModules);
  const { currFilter, charter } = herosInf;
  const dispatch = useDispatch();
  const fetchCharter = async () => {
    dispatch(requestCharters());
  };

  useEffect(() => {
    fetchCharter();
  }, [currFilter]);
  return (
    <section>
      { charter.length ? charter.map((currCharter: any) => <h1>{currCharter.name}</h1>)
        : <h1>Nenhum personagem encontrado</h1> }
    </section>
  );
}

export default CardsArea;
