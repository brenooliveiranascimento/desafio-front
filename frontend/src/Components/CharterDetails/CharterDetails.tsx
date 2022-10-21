import React from 'react';
import { useSelector } from 'react-redux';
import { heroDetailsStateType, heroTypes } from '../../types/heroTypes';
import './CharterDetails.css';

interface detailStoreType {
  heroDetail: heroDetailsStateType
}

function CharterDetails() {
  const { charter } = useSelector(({ heroDetail }: detailStoreType) => heroDetail);
  console.log(charter);

  return (
    <div className="charterDetails_container">
      <h1>djawiodjwio</h1>
    </div>
  );
}

export default CharterDetails;
