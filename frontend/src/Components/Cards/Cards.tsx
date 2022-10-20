import React from 'react';
import { heroTypes } from '../../types/heroTypes';
import Stats from './Stats';
import './cardStyles.css';
import ListCharter from '../ListCharter/ListCharter';

interface currCharterTypes {
  currCharter: heroTypes
}

function Cards({ currCharter }: currCharterTypes) {
  return (
    <section className="card_container">
      <ListCharter currCharter={currCharter} />
      <img src={currCharter.image?.url} alt={currCharter.name} />
      <article className="inf_area">
        <span className="charter_name">{currCharter.name}</span>
        <section>
          {Object.keys(currCharter.powerstats).map((currAttr: string) => (
            <Stats
              key={currAttr}
              attr={JSON
                .parse(currCharter.powerstats[currAttr])}
              currAttr={currAttr}
            />
          ))}
        </section>
      </article>
    </section>
  );
}

export default Cards;
