import React from 'react';
import { heroTypes } from '../../types/heroTypes';

interface currCharterTypes {
  currCharter: heroTypes
}

function Cards({ currCharter }: currCharterTypes) {
  console.log(currCharter);
  return (
    <section>
      <img style={{ width: 100 }} src={currCharter.image?.url} alt={currCharter.name} />
      <article>
        <span>{currCharter.name}</span>
        <section>
          <span>
            combat
            {' '}
            {currCharter.powerstats?.combat}
          </span>
          <span>
            durability
            {' '}
            {currCharter.powerstats?.durability}
          </span>
          {' '}
          <span>
            power
            {' '}
            {currCharter.powerstats?.power}
          </span>
          <span>
            inteligence
            {' '}
            {currCharter.powerstats?.inteligence}
          </span>
        </section>
      </article>
    </section>
  );
}

export default Cards;
