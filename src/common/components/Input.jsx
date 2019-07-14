import React, { useState, useEffect } from 'react';
import block from 'bem-cn-lite';
import { PropTypes } from 'prop-types';
import './Input.scss';

import {
  encodeDate,
  decodeDate,
} from '../helpers';

const b = block('Input');

const AbstractInput = (props) => {
  const [domProps, setDomProps] = useState(_propsToDomProps(props))

  useEffect(() => {
    setDomProps(_propsToDomProps(props));
  }, [props])

  function _onChange(e) {
    props.onChangeValue
      && props.onChangeValue(props.fromView ? props.fromView(e.target.value) : e.target.value);
  }

  function _propsToDomProps(props) {
    const domProps = Object.assign({}, props);
    delete domProps.toView;
    delete domProps.fromView;
    delete domProps.onChangeValue;
    return domProps;
  }

  return <div className={b()}>
    {props.caption
      && <label for={props.id || null} className={b('Caption')}>{props.caption}:</label>
    }
    <input
      {...domProps}
      id={props.id || null}
      className={b('Control')}
      value={props.toView ? props.toView(props.value) : props.value}
      onChange={_onChange}
    />
  </div>;
}
AbstractInput.propTypes = {
  id: PropTypes.string,
  caption: PropTypes.string,
  toView: PropTypes.func,
  fromView: PropTypes.func,
  onChangeValue: PropTypes.func,
  value: PropTypes.any,
};

export
const InputText = (props) => (
  <AbstractInput
    fromView={String}
    type='text'
    {...props} />
);
InputText.propTypes = {
  id: PropTypes.string,
  caption: PropTypes.string,
  onChangeValue: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

export
const InputDate = (props) => (
  <AbstractInput
    toView={decodeDate}
    fromView={encodeDate}
    type='date'
    {...props}
  />
);