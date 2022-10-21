import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleCharterDetailControl } from '../../redux/actions/genericHeroActions';
import { heroDetailsStateType, heroTypes } from '../../types/heroTypes';
import Cards from '../Cards/Cards';
import Biography from './CharterDetailSubComponents/Biography';
import './CharterDetails.css';
import Connections from './CharterDetailSubComponents/connections';

interface detailStoreType {
  heroDetail: heroDetailsStateType
}

function CharterDetails() {
  const dispatch = useDispatch();
  const { charter } = useSelector(({ heroDetail }: detailStoreType) => heroDetail);
  const { biography, connections } = charter;

  const closeDetails = () => {
    dispatch(handleCharterDetailControl(null));
  };

  return (
    <main className="charterDetails_container">

      <section className="card_detail">
        <aside className="side_image">
          <Cards currCharter={charter} />
        </aside>
        <aside className="side_inf">
          <button onClick={closeDetails} className="closeBtn" type="button">
            x
          </button>
          <h1>{charter.name}</h1>
          {Object.keys(biography)
            .map((bioKey: string) => (
              <Biography key={bioKey} bioKey={bioKey} biography={biography} />))}

          {Object.keys(connections)
            .map((connKey: string) => (
              <Connections key={connKey} connKey={connKey} connections={connections} />))}
        </aside>
      </section>
    </main>
  );
}

export default CharterDetails;
