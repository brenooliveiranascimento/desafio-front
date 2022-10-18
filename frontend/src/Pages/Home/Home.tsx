import React from 'react';
import Filters from '../../Components/Filters/Filters';
import Header from '../../Components/Header/Header';
import './home.css';

function Home() {
  return (
    <section className="home_cintainer">
      <Header />
      <Filters />
    </section>
  );
}

export default Home;
