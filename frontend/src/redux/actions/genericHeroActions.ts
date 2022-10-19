import { CREATE_FILTER, SELECT_FILTER, SET_FILTERS } from '../redux_types';

export const selectCurrFilter = (filter: string) => ({
  type: SELECT_FILTER,
  payload: filter,
});

export const createFilter = (filter: string) => ({
  type: CREATE_FILTER,
  payload: filter,
});

export const setFilters = (filters: any) => ({
  type: SET_FILTERS,
  payload: filters,
});

export const setChartes = (chartes: any, type: string) => ({
  type,
  payload: chartes,
});

export const updateLoad = (type: string) => ({
  type,
});
