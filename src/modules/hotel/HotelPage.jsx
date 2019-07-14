import React, { useState, useEffect } from 'react';
import block from 'bem-cn-lite';
import { PropTypes } from 'prop-types';
import { Link } from "react-router-dom";

import './HotelPage.scss';
import I18N from '../../common/i18n';
import { InputDate } from '../../common/components/Input';
import Hotel from '../../common/struct/Hotel';
import Button from '../../common/components/Button';
import Stars from '../../common/components/Stars';
import Ads from '../../common/components/Ads';
import { decodeDate } from '../../common/helpers';

const b = block('HotelPage');

export default
function HotelPage({ hotel }) {
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());

  useEffect(() => {
    if (checkOut < checkIn)
      setCheckOut(checkIn);
  }, [checkIn, checkOut])

  function _submitBook() {
    alert(`${I18N.HOTEL_BOOK_MSG} ${decodeDate(checkIn)} ${I18N.HOTEL_BOOK_MSG_TO} ${decodeDate(checkOut)}`)
  }

  return <div className={b()}>
      <section className={b("Sidebar")}>
        <Link to="/" className={b("BackButton")}>&lt;&lt; {I18N.HOTEL_BUTTON_BACK}</Link>
        <Ads/>
      </section>
      <section className={b("Card")}>
        <h1>{hotel.name}  <Stars count={hotel.stars}/></h1>
        <div className={b('City')}>{hotel.city}</div>
        <div className={b('Photo')}>
          <img src={hotel.photo} alt={hotel.name}/>
        </div>
        <form className={b('BookForm')}>
          <InputDate
            caption={I18N.HOTEL_CAPTION_CHECK_IN}
            onChangeValue={setCheckIn}
            value={checkIn}/>
          <InputDate
            caption={I18N.HOTEL_CAPTION_CHECK_OUT}
            onChangeValue={setCheckOut}
            value={checkOut}/>
          <Button onClick={_submitBook}>{I18N.HOTEL_BUTTON_BOOK}</Button>
        </form>
        <div className={b('Description')}>{hotel.description}</div>
      </section>
    </div>;
}
HotelPage.propTypes = {
  hotel: PropTypes.instanceOf(Hotel),
};