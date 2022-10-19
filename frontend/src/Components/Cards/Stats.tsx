import React from 'react';

interface attrType {
  attr: string,
  currAttr: string
}

function Stats({ attr, currAttr }: attrType) {
  return (
    <section className="stats_container">
      <span>
        {currAttr}
        {attr}
      </span>
      <section className="statusBar_limit">
        <article style={{ width: `${attr}%` }} />
      </section>
    </section>
  );
}

export default Stats;
