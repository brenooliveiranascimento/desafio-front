import {
  ADD_CHARTER_IN_FILTER, CREATE_FILTER, REMOVE_CHARTER_IN_FILTER, SELECT_FILTER, SET_FILTERS,
} from '../redux_types';

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

export const updateFilter = (type: string, id: string) => ({
  type,
  payload: id,
});

export const setChartes = (chartes: any, type: string) => ({
  type,
  payload: chartes,
});

export const updateLoad = (type: string) => ({
  type,
});

export const addCharterInFilter = (id: number, filter: string) => ({
  type: ADD_CHARTER_IN_FILTER,
  id,
  filter,
});

export const removeCharterInFilter = (id: number, filter: string) => ({
  type: REMOVE_CHARTER_IN_FILTER,
  id,
  filter,
});
