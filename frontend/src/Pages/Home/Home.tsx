import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardsArea from '../../Components/CardsArea/CardsArea';
import Filters from '../../Components/Filters/Filters';
import Header from '../../Components/Header/Header';
import { setFilters } from '../../redux/actions/genericHeroActions';
import { getLocalStorage } from '../../utils/localStorageModel';
import './home.css';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    const allFiltersInStore = getLocalStorage('HEROS_FILTERS');
    if (allFiltersInStore) {
      dispatch(setFilters(allFiltersInStore));
    }
  }, []);
  return (
    <section className="home_cintainer">
      <Header />
      <Filters />
      <CardsArea />
    </section>
  );
}

export default Home;
