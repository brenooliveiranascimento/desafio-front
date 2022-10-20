import { Dispatch } from 'react';
import herosApi from '../../services/apiHeros/requestHeros';
import { updateLocalStore } from '../../utils/localStorageModel';
import {
  ADD_HEROS, CREATE_LIST, FETCH_HEROS, LOAD_END, LOAD_INIT, SELECT_LIST,
} from '../redux_types';
import {
  addCharterInLists, removeCharterInList, selectCurrList, setChartes, updateLoad,
} from './genericHeroActions';

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
    const { currList, lists } = state().herosModules;
    if (currList === 'All') {
      dispatch(requestAllCharter());
      dispatch(setChartes([], FETCH_HEROS));
      return;
    }
    if (currList === '') return;
    const chaters = await Promise.all(lists[currList].map(async (currId: any) => {
      const fetchCharter = (await herosApi.get(`${currId}`)).data;
      return fetchCharter;
    }));
    dispatch(updateLoad(LOAD_END));
    dispatch(setChartes(chaters, FETCH_HEROS));
  };
};

export const updateLists = (id: number, list: string, action: string): any => {
  return async (dispatch: Dispatch<any>, state: any) => {
    if (action === 'ADD') {
      await dispatch(addCharterInLists(id, list));
      const { lists } = state().herosModules;
      updateLocalStore('HEROS_LISTS', lists);
      return;
    }
    await dispatch(removeCharterInList(id, list));
    const { lists } = state().herosModules;
    updateLocalStore('HEROS_LISTS', lists);
  };
};

export const searchCharterByName = (name:string): any => {
  return async (dispatch: Dispatch<any>) => {
    dispatch(updateLoad(LOAD_INIT));
    const { results }: any = await (await herosApi.get(`search/${name}`)).data;
    if (!results) return alert('Personagem não encontrado!');
    dispatch(selectCurrList(''));
    dispatch(updateLoad(LOAD_END));
    dispatch(setChartes(results, FETCH_HEROS));
  };
};
