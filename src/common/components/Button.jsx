import React, { useState, useEffect } from 'react';
import block from 'bem-cn-lite';
import { PropTypes } from 'prop-types';
import { Link } from "react-router-dom";

import './Button.scss';

const b = block('Button');

export default
function Button({ onClick, ...props}) {
  return onClick
    ? <div className={b()} onClick={onClick} {...props}/>
    : <Link className={b()} {...props}/>
}
Button.propTypes = {
  ...Link.propTypes,
  onClick: PropTypes.func,
  to: PropTypes.string
};
