import React from 'react';
import block from 'bem-cn-lite';
import { Link } from "react-router-dom";

import './Logo.scss';

const b = block('Logo');

export default
function Logo() {
  return <div className={b()}>
    <Link to='/'>
      <span className={b('Booking')}>booking</span>
      <span className={b('Search')}>search.org</span>
    </Link>
  </div>;
}