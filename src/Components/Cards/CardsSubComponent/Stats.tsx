import React from 'react';

interface attrType {
  attr: any,
  currAttr: string
}

function Stats({ attr, currAttr }: attrType) {
  return (
    <section className="stats_container">
      <span>
        {currAttr}
        {' '}
        {attr || 'No information'}
      </span>
      <section className="statusBar_limit">
        <article style={{
          width: `${attr || 0}%`,
          backgroundColor: (Number(attr) === 100 ? 'yellow' : 'red'),
        }}
        />
      </section>
    </section>
  );
}

export default Stats;
