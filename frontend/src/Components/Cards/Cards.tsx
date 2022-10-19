import React from 'react';
import { heroTypes } from '../../types/heroTypes';
import Stats from './Stats';

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
          {Object.keys(currCharter.powerstats).map((currAttr: string) => (
            <Stats key={currAttr} attr={currCharter.powerstats[currAttr]} />
          ))}
        </section>
      </article>
    </section>
  );
}

export default Cards;
