import { heroActionTypes, heroModulesTypes } from '../../../types/heroTypes';
import {
  ADD_CHARTER_IN_LIST,
  ADD_HEROS,
  ADD_HERO_IN_LIST,
  CREATE_LIST,
  DELETE_LIST,
  FETCH_HEROS,
  LOAD_END,
  LOAD_INIT,
  REMOVE_CHARTER_IN_LIST,
  REMOVE_HERO_IN_LIST,
  SELECT_LIST,
  SET_LIST,
} from '../../redux_types';

const STATE_INITIAL_VALUE: heroModulesTypes = {
  charter: [],
  lists: {
    marvel: [346, 333, 332, 345, 149],
    dc: [6, 7, 8, 9],
    villains: [10, 11, 12],
    All: [],
  },
  currFilter: 'All',
  countShow: 1,
  load: false,
};

const ACTION_INITIAL_STATE: heroActionTypes = {
  type: '',
  payload: {},
  id: 0,
  filter: '',
};

function herosModules(state = STATE_INITIAL_VALUE, action = ACTION_INITIAL_STATE) {
  console.log(action);
  switch (action.type) {
    case LOAD_INIT:
      return { ...state, load: true };
    case LOAD_END:
      return { ...state, load: false };
    case FETCH_HEROS:
      return { ...state, charter: action.payload };
    case ADD_HEROS:
      return {
        ...state,
        charter: [...state.charter, ...action.payload],
        countShow: state.countShow + 30,
      };
    case SELECT_LIST:
      return { ...state, currFilter: action.payload, countShow: 1 };
    case CREATE_LIST:
      return { ...state, lists: { ...state.lists, [action.payload]: [] } };
    case SET_LIST:
      return { ...state, lists: action.payload };
    case ADD_CHARTER_IN_LIST:
      return {
        ...state,
        lists: {
          ...state.lists,
          [action.filter]: [...state.lists[action.filter], action.id],
        },
      };
    case REMOVE_CHARTER_IN_LIST:
      return {
        ...state,
        lists: {
          ...state.lists,
          [action.filter]: state.lists[action.filter]
            .filter((currId: string) => Number(currId) !== action.id),
        },
      };
    case DELETE_LIST:
      return state;
    default:
      return state;
  }
}

export default herosModules;
