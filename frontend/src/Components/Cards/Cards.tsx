import React from 'react';
import { Link } from 'react-router-dom';
import { heroTypes } from '../../types/heroTypes';
import Stats from './Stats';
import './cardStyles.css';
import ListCharter from '../ListCharter/ListCharter';
import CardHeader from './CardHeader';

interface currCharterTypes {
  currCharter: heroTypes
}

function Cards({ currCharter }: currCharterTypes) {
  const openDetails = () => {
  };
  return (
    <section className="card_container">
      <Link to={`${currCharter.id}`} className="details_btn" type="button">
        <CardHeader currChar={currCharter} />
        <h1 className="details_message">Tap for Detaisl</h1>
        <img src={currCharter.image?.url} alt={currCharter.name} />
      </Link>
      <ListCharter currCharter={currCharter} />
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
    </section>
  );
}

export default Cards;
