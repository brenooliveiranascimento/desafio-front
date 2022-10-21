import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardsArea from '../../Components/CardsArea/CardsArea';
import Lists from '../../Components/Lists/Lists';
import Header from '../../Components/Header/Header';
import { genericUpdateLists } from '../../redux/actions/genericHeroActions';
import { getLocalStorage } from '../../utils/localStorageModel';
import './home.css';
import { SET_LIST } from '../../redux/redux_types';
import CharterDetails from '../../Components/CharterDetails/CharterDetails';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    const allListInStore = getLocalStorage('HEROS_LISTS');
    if (Object.keys(allListInStore).length) {
      dispatch(genericUpdateLists(SET_LIST, allListInStore));
    }
  }, []);
  return (
    <section className="home_cintainer">
      <CharterDetails />
      <Header />
      <Lists />
      <CardsArea />
    </section>
  );
}

export default Home;
