import { heroTypes } from '../../types/heroTypes';
import { HANDLE_DETAIL } from '../redux_types';

export const genericUpdateLists = (type: string, id: any) => ({
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

export const charterControl = (type: string, id: number, list: string) => ({
  type,
  id,
  list,
});

export const handleCharterDetailControl = (charter: heroTypes | null) => ({
  type: HANDLE_DETAIL,
  payload: charter,
});
