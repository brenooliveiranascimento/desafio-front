import React from 'react';
import { heroTypes } from '../../types/heroTypes';

interface currCharterTypes {
  currChar: heroTypes
}
function CardHeader({ currChar }: currCharterTypes) {
  return (
    <section className="charter_name">
      <span>
        {currChar.name}
        <p>{currChar.biography.publisher}</p>
      </span>
    </section>
  );
}

export default CardHeader;
