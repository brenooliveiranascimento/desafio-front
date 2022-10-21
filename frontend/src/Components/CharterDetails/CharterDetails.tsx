import React from 'react';
import { useSelector } from 'react-redux';
import { heroDetailsStateType, heroTypes } from '../../types/heroTypes';
import Cards from '../Cards/Cards';
import Biography from './Biography';
import './CharterDetails.css';

interface detailStoreType {
  heroDetail: heroDetailsStateType
}

function CharterDetails() {
  const { charter } = useSelector(({ heroDetail }: detailStoreType) => heroDetail);
  const { biography, connections } = charter;
  console.log(charter);
  return (
    <main className="charterDetails_container">
      <section className="card_detail">
        <section className="side_image">
          <Cards currCharter={charter} />
        </section>
        <section className="side_inf">
          <h1>{charter.name}</h1>
          {Object.keys(biography)
            .map((bioKey: string) => (<Biography bioKey={bioKey} biography={biography} />))}
          {
            Object.keys(connections).map((bioKey: string) => (
              <span>
                <strong>{bioKey}</strong>
                {' '}
                {connections[bioKey]}
              </span>
            ))
          }
        </section>
      </section>
    </main>
  );
}

export default CharterDetails;
