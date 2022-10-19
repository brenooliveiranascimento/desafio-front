import React from 'react';
import CardsArea from '../../Components/CardsArea/CardsArea';
import Filters from '../../Components/Filters/Filters';
import Header from '../../Components/Header/Header';
import './home.css';

function Home() {
  return (
    <section className="home_cintainer">
      <Header />
      <Filters />
      <CardsArea />
    </section>
  );
}

export default Home;
