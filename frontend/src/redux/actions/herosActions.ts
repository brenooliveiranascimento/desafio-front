import { Dispatch } from 'react';
import herosApi from '../../services/apiHeros/requestHeros';
import {
  ADD_HEROS, CREATE_FILTER, FETCH_HEROS, LOAD_END, LOAD_INIT, SELECT_FILTER,
} from '../redux_types';
import { setChartes, updateLoad } from './genericHeroActions';

export const requestAllCharter = (): any => {
  return async (dispatch: Dispatch<any>, state: any) => {
    dispatch(updateLoad(LOAD_INIT));
    const { countShow } = state().herosModules;
    const idList = [];
    for (let currId = countShow; currId <= countShow + 29; currId += 1) {
      idList.push(currId);
    }
    const chaters = await Promise.all(idList.map(async (currId: any) => {
      const fetchCharter = (await herosApi.get(`${currId}`)).data;
      return fetchCharter;
    }));
    dispatch(setChartes(chaters, ADD_HEROS));
    dispatch(updateLoad(LOAD_END));
  };
};

export const requestCharters = (): any => {
  return async (dispatch: Dispatch<any>, state: any) => {
    dispatch(updateLoad(LOAD_INIT));
    const { currFilter, filters } = state().herosModules;
    if (currFilter === 'All') {
      dispatch(requestAllCharter());
      dispatch(setChartes([], FETCH_HEROS));
      return;
    }
    if (currFilter === '') return;
    const chaters = await Promise.all(filters[currFilter].map(async (currId: any) => {
      const fetchCharter = (await herosApi.get(`${currId}`)).data;
      return fetchCharter;
    }));
    dispatch(updateLoad(LOAD_END));
    dispatch(setChartes(chaters, FETCH_HEROS));
  };
};
