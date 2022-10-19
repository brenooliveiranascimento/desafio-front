import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { requestCharters } from '../../redux/actions/herosActions';
import herosApi from '../../services/apiHeros/requestHeros';

function CardsArea() {
  const herosInf = useSelector(({ herosModules }: any) => herosModules);
  const { currFilter, filters } = herosInf;
  const dispatch = useDispatch();
  const fetch = async () => {
    dispatch(requestCharters());
  };

  useEffect(() => {
    fetch();
  }, [currFilter]);
  return (
    <section>
      <h1>djiwad</h1>
    </section>
  );
}

export default CardsArea;
