import React, { useState, useEffect } from 'react';
import block from 'bem-cn-lite';
import { PropTypes } from 'prop-types';

import './Home.scss';
import I18N from '../../common/i18n';
import { InputText } from '../../common/components/Input';
import Hotel from '../../common/struct/Hotel';
import HomeHotelItem from './HomeHotelItem';
import Ads from '../../common/components/Ads';

const b = block('Home');

const MAX_HOTELS = 5;

export default
function Home({ hotels }) {
  const [searchText, setSearchText] = useState('');
  const [visibleHotels, setVisibleHotels] = useState([]);
  const searchRgx = new RegExp(searchText, 'gui');

  useEffect(() => {
    const newVisibleHotels = (hotels || [])
      .filter((h) => h.name.match(searchRgx) || h.city.match(searchRgx))
      .sort(() => Math.random() - 0.5)
      .splice(0, MAX_HOTELS);

    setVisibleHotels(newVisibleHotels);
  }, [hotels, searchText])

  return <>
    <h1>{I18N.HOME_H1}</h1>
    <div className={b()}>
      <section className={b("Sidebar")}>
        <h2>{I18N.HOME_SEARCH_HEADER}</h2>
        <InputText
          placeholder={I18N.HOME_SEARCH_PLACEHOLDER}
          onChangeValue={setSearchText}
          value={searchText}
        />
        <Ads/>
      </section>
      <section className={b("HotelList")}>
        <h2>{I18N.HOME_LIST_HEADER} <span>({I18N.HOME_LIST_FOUND}: {visibleHotels.length})</span></h2>
        {visibleHotels.map((h) => <HomeHotelItem hotel={h} key={h.id} />)}
      </section>
    </div>
  </>;
}
Home.propTypes = {
  hotels: PropTypes.arrayOf(PropTypes.instanceOf(Hotel)),
};