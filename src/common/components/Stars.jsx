import React from 'react';
import block from 'bem-cn-lite';

import './Stars.scss';

const b = block('Stars');

export default
function Stars({ count }) {
  return <div className={b({
    "1": count === 1,
    "2": count === 2,
    "3": count === 3,
    "4": count === 4,
    "5": count === 5,
  })}/>;
}