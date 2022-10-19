import {
  ADD_CHARTER_IN_LIST, CREATE_LIST, REMOVE_CHARTER_IN_LIST, SELECT_LIST, SET_LIST,
} from '../redux_types';

export const selectCurrFilter = (filter: string) => ({
  type: SELECT_LIST,
  payload: filter,
});

export const createFilter = (filter: string) => ({
  type: CREATE_LIST,
  payload: filter,
});

export const setLists = (filters: any) => ({
  type: SET_LIST,
  payload: filters,
});

export const updateLists = (type: string, id: string) => ({
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

export const addCharterInLists = (id: number, filter: string) => ({
  type: ADD_CHARTER_IN_LIST,
  id,
  filter,
});

export const removeCharterInList = (id: number, filter: string) => ({
  type: REMOVE_CHARTER_IN_LIST,
  id,
  filter,
});
