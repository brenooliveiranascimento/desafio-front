import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import herosApi from '../../services/apiHeros/requestHeros';

function CardsArea() {
  const herosInf = useSelector(({ herosModules }: any) => herosModules);
  const { currFilter, filters } = herosInf;
  const requestCharter = async () => {
    try {
      const chaters = await Promise.all(filters[currFilter].map(async (currId: any) => {
        const fetchCharter = await (await herosApi.get(`${currId}`)).data;
        return fetchCharter;
      }));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    requestCharter();
  }, [currFilter]);
  return (
    <section>
      <h1>djiwad</h1>
    </section>
  );
}

export default CardsArea;
