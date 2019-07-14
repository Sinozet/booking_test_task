import React from 'react';
import block from 'bem-cn-lite';
import { Link } from "react-router-dom";

import './Ads.scss';
import I18N from '../i18n';
import Section from '../enums';

const b = block('Ads');

export default
function Ads() {
  return <Link to={`/${Section.HOTEL}/1`} className={b()}>{I18N.ADS_TEXT}</Link>;
}