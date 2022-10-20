import { Dispatch } from 'react';
import herosApi from '../../services/apiHeros/requestHeros';
import { updateLocalStore } from '../../utils/localStorageModel';
import {
  ADD_CHARTER_IN_LIST,
  FETCH_HEROS, LOAD_END, LOAD_INIT, REMOVE_CHARTER_IN_LIST,
} from '../redux_types';
import {
  charterControl, setChartes, updateLoad,
} from './genericHeroActions';

export const updateLists = (id: number, list: string, action: string): any => {
  return async (dispatch: Dispatch<any>, state: any) => {
    if (action === 'ADD') {
      await dispatch(charterControl(ADD_CHARTER_IN_LIST, id, list));
      const { lists } = state().herosModules;
      updateLocalStore('HEROS_LISTS', lists);
      return;
    }
    await dispatch(charterControl(REMOVE_CHARTER_IN_LIST, id, list));
    const { lists } = state().herosModules;
    updateLocalStore('HEROS_LISTS', lists);
  };
};

export const searchCharterByName = (name:string): any => {
  return async (dispatch: Dispatch<any>) => {
    dispatch(updateLoad(LOAD_INIT));
    const { results }: any = await (await herosApi.get(`search/${name}`)).data;
    if (!results) return alert('Personagem não encontrado!');
    dispatch(updateLoad(LOAD_END));
    dispatch(setChartes(results, FETCH_HEROS));
  };
};
