import React from 'react';

interface biographyPropType {
  bioKey: any,
  biography:any,
}

function Biography({ bioKey, biography }: biographyPropType) {
  return (
    <span>
      <strong>{bioKey}</strong>
      {' '}
      {biography[bioKey]}
    </span>
  );
}

export default Biography;
