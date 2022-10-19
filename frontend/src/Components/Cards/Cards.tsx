import React from 'react';
import { heroTypes } from '../../types/heroTypes';

interface currCharterTypes {
  currCharter: heroTypes
}

function Cards({ currCharter }: currCharterTypes) {
  return (
    <section>
      <img style={{ width: 100 }} src={currCharter.image?.url} alt={currCharter.name} />
    </section>
  );
}

export default Cards;
