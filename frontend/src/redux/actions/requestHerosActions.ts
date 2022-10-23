import { Dispatch } from 'react';
import herosApi from '../../services/apiHeros/requestHeros';
import {
  ADD_HEROS, FETCH_HEROS, LOAD_END, LOAD_INIT, SELECT_LIST,
} from '../redux_types';
import { setChartes, updateLoad } from './genericHeroActions';

export const requestAllCharter = (): any => {
  return async (dispatch: Dispatch<any>, state: any) => {
    dispatch(updateLoad(LOAD_INIT));
    const { countShow } = state().herosModules;
    const idList = [];
    for (let currId = countShow; currId <= countShow + 27; currId += 1) {
      idList.push(currId);
    }
    try {
      const chaters = await Promise.all(idList.map(async (currId: any) => {
        const fetchCharter = (await herosApi.get(`${currId}`)).data;
        return fetchCharter;
      }));
      dispatch(setChartes(chaters, ADD_HEROS));
      dispatch(updateLoad(LOAD_END));
    } catch (e) {
      console.log(e);
      alert('fala ao carregar! Por favor recarregue a página ou selecione outra lista');
    }
  };
};

export const requestCharters = (): any => {
  return async (dispatch: Dispatch<any>, state: any) => {
    dispatch(updateLoad(LOAD_INIT));
    const { currList, lists } = state().herosModules;
    if (currList === 'All') {
      dispatch(requestAllCharter());
      dispatch(setChartes([], FETCH_HEROS));
      return;
    }
    if (currList === '') return;
    try {
      const chaters = await Promise.all(lists[currList].map(async (currId: any) => {
        const fetchCharter = (await herosApi.get(`${currId}`)).data;
        return fetchCharter;
      }));
      dispatch(updateLoad(LOAD_END));
      dispatch(setChartes(chaters, FETCH_HEROS));
    } catch (e) {
      console.log(e);
      alert('');
    }
  };
};
