import React from 'react';
import { heroTypes } from '../../types/heroTypes';
import Stats from './Stats';
import './cardStyles.css';
import ListCharter from '../ListCharter/ListCharter';
import CardHeader from './CardHeader';

interface currCharterTypes {
  currCharter: heroTypes
}

function Cards({ currCharter }: currCharterTypes) {
  return (
    <section className="card_container">
      <ListCharter currCharter={currCharter} />
      <CardHeader currChar={currCharter} />
      <img src={currCharter.image?.url} alt={currCharter.name} />
      <button className="details_btn" type="button">
        <article className="inf_area">
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
      </button>
    </section>
  );
}

export default Cards;
