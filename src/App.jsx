import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import block from 'bem-cn-lite';

import './App.scss';
import Section from './common/enums';
import Home from './modules/home/Home';
import HotelPage from './modules/hotel/HotelPage';
import Logo from './common/components/Logo';
import Hotel from './common/struct/Hotel';
import NoData from './common/components/NoData';

const b = block('App');

export default
function App() {
  const [hotels, setHotels] = useState([]);
  
  useEffect(() => {
    fetch('/data/hotels.json')
      .then((res) => res.json())
      .then((hotelsData) => {
        setHotels(hotelsData.map((obj) => new Hotel(obj))) 
      });
  }, []);

  function _renderHotelPage({ match: { params: { id }} }) {
    const hotel = hotels.find((h) => h.id === Number(id));
    return hotel
      ? <HotelPage hotel={hotel}/>
      : <NoData/>
  }

  return (
  <Router>
    <div className={b()}>
      <div className={b('Content')}>
        <header className={b('Header')}>
          <Logo/>
        </header>
        <main className={b('Main')}>
          <Route
            path="/"
            exact
            component={() => <Home hotels={hotels}/>}
          />
          <Route
            path={`/${Section.HOTEL}/:id`}
            exact
            component={_renderHotelPage}
          />
        </main>
      </div>
    </div>
  </Router>
  );
};