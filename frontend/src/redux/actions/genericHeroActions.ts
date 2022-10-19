import { CREATE_FILTER, SELECT_FILTER } from '../redux_types';

export const selectCurrFilter = (filter: string) => ({
  type: SELECT_FILTER,
  payload: filter,
});

export const createFilter = (filter: string) => ({
  type: CREATE_FILTER,
  payload: filter,
});

export const setChartes = (chartes: any, type: string) => ({
  type,
  payload: chartes,
});

export const updateLoad = (type: string) => ({
  type,
});
