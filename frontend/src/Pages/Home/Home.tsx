import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardsArea from '../../Components/CardsArea/CardsArea';
import Lists from '../../Components/Lists/Lists';
import Header from '../../Components/Header/Header';
import { setLists } from '../../redux/actions/genericHeroActions';
import { getLocalStorage } from '../../utils/localStorageModel';
import './home.css';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    const allListInStore = getLocalStorage('HEROS_LISTS');
    if (Object.keys(allListInStore).length) {
      dispatch(setLists(allListInStore));
    }
  }, []);
  return (
    <section className="home_cintainer">
      <Header />
      <Lists />
      <CardsArea />
    </section>
  );
}

export default Home;
