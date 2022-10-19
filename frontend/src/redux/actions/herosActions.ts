import { Dispatch } from 'react';
import herosApi from '../../services/apiHeros/requestHeros';
import { CREATE_FILTER, FETCH_HEROS, SELECT_FILTER } from '../redux_types';

export const setHerosInStore = async () => {

};

export const selectCurrFilter = (filter: string) => ({
  type: SELECT_FILTER,
  payload: filter,
});

export const createFilter = (filter: string) => ({
  type: CREATE_FILTER,
  payload: filter,
});

const setChartes = (chartes: any) => ({
  type: FETCH_HEROS,
  payload: chartes,
});

export const requestCharters = (): any => {
  return async (dispatch: Dispatch<any>, state: any) => {
    const { currFilter, filters } = state().herosModules;
    const chaters = await Promise.all(filters[currFilter].map(async (currId: any) => {
      const fetchCharter = (await herosApi.get(`${currId}`)).data;
      return fetchCharter;
    }));
    console.log(chaters);
    dispatch(setChartes(chaters));
  };
};
