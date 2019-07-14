import React from 'react';
import block from 'bem-cn-lite';
import { PropTypes } from 'prop-types';

import './HomeHotelItem.scss';
import I18N from '../../common/i18n';
import Hotel from '../../common/struct/Hotel';
import Section from '../../common/enums';
import Button from '../../common/components/Button';
import Stars from '../../common/components/Stars';

const b = block('HomeHotelItem');

export default
function HomeHotelItem({ hotel }) {
  return <div className={b()}>
    <div className={b('Photo')}>
      <img src={hotel.photoPreview} alt={hotel.name}/>
    </div>
    <div className={b('Info')}>
      <div className={b('Title')}>
        {hotel.name} <Stars count={hotel.stars}/>
      </div>
      <div className={b('City')}>{hotel.city}</div>
      <Button to={`/${Section.HOTEL}/${hotel.id}`}>{I18N.HOME_BUTTON_DETAILS}</Button>
    </div>
  </div>;
}
HomeHotelItem.propTypes = {
  hotel: PropTypes.instanceOf(Hotel),
};