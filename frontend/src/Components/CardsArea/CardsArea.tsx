import React, { useEffect } from 'react';
import herosApi from '../../services/apiHeros/requestHeros';

function CardsArea() {
  const requestCharter = async () => {
    try {
      const chaters = await herosApi.get('1');
      console.log(chaters.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    requestCharter();
  }, []);
  return (
    <section>
      <h1>djiwad</h1>
    </section>
  );
}

export default CardsArea;
