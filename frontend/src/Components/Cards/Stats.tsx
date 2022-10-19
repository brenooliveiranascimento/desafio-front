import React from 'react';

interface attrType {
  attr: string
}

function Stats({ attr }: attrType) {
  return (
    <section>
      <h1>{attr}</h1>
    </section>
  );
}

export default Stats;
