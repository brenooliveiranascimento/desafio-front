import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardsArea from '../../Components/CardsArea/CardsArea';
import Filters from '../../Components/Filters/Lists';
import Header from '../../Components/Header/Header';
import { setLists } from '../../redux/actions/genericHeroActions';
import { getLocalStorage } from '../../utils/localStorageModel';
import './home.css';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    const allFiltersInStore = getLocalStorage('HEROS_FILTERS');
    if (Object.keys(allFiltersInStore).length) {
      dispatch(setLists(allFiltersInStore));
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
