import { heroActionTypes, heroDetailsStateType, heroModulesTypes } from '../../types/heroTypes';

export const STATE_INITIAL_VALUE: heroModulesTypes = {
  charter: [],
  lists: {
    marvel: [346, 333, 332, 345, 149, 717],
    dc: [69, 60, 195, 204],
    villains: [204, 370, 379, 731, 678],
    anime: [],
    All: [],
  },
  currList: 'All',
  countShow: 1,
  load: false,
};

export const ACTION_INITIAL_STATE: heroActionTypes = {
  type: '',
  payload: {},
  id: 0,
  list: '',
};

export const DETAILS_STATE_INITIAL_VALUE: heroDetailsStateType = {
  charter: null,
  showDetails: false,
};

export const DETAILS_ACTION_INITIAL_STATE = {
  type: '',
  payload: {},
};
