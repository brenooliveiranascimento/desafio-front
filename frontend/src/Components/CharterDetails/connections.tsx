import React from 'react';

interface connectionProps {
  connKey: any,
  connections: any
}

function Connections({ connKey, connections }: connectionProps) {
  return (
    <span>
      <strong>{connKey}</strong>
      {' '}
      {connections[connKey]}
    </span>
  );
}

export default Connections;
