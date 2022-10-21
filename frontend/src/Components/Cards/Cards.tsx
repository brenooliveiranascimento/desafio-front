import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { heroTypes } from '../../types/heroTypes';
import Stats from './Stats';
import './cardStyles.css';
import ListCharter from '../ListCharter/ListCharter';
import CardHeader from './CardHeader';
import { handleCharterDetailControl } from '../../redux/actions/genericHeroActions';

interface currCharterTypes {
  currCharter: heroTypes
}

function Cards({ currCharter }: currCharterTypes) {
  const dispatch = useDispatch();

  const handleDetails = () => {
    dispatch(handleCharterDetailControl(currCharter));
  };

  return (
    <section className="card_container">
      <button onClick={handleDetails} className="details_btn" type="button">
        <CardHeader currChar={currCharter} />
        <h1 className="details_message">Tap for Detaisl</h1>
        <img src={currCharter.image?.url} alt={currCharter.name} />
      </button>
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
