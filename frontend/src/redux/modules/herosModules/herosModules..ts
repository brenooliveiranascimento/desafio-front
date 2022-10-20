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
  REMOVE_LIST,
  SELECT_LIST,
  SET_LIST,
} from '../../redux_types';

const STATE_INITIAL_VALUE: heroModulesTypes = {
  charter: [],
  lists: {
    marvel: [346, 333, 332, 345, 149, 717],
    dc: [69, 60, 195, 204],
    villains: [204, 370, 379, 731, 678],
    All: [],
  },
  currList: 'All',
  countShow: 1,
  load: false,
};

const ACTION_INITIAL_STATE: heroActionTypes = {
  type: '',
  payload: {},
  id: 0,
  list: '',
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
      return { ...state, currList: action.payload, countShow: 1 };
    case CREATE_LIST:
      return { ...state, lists: { ...state.lists, [action.payload]: [] } };
    case SET_LIST:
      return { ...state, lists: action.payload };
    case ADD_CHARTER_IN_LIST:
      return {
        ...state,
        lists: {
          ...state.lists,
          [action.list]: [...state.lists[action.list], action.id],
        },
      };
    case REMOVE_CHARTER_IN_LIST:
      return {
        ...state,
        lists: {
          ...state.lists,
          [action.list]: state.lists[action.list]
            .filter((currId: string) => Number(currId) !== action.id),
        },
      };
    case REMOVE_LIST:
      return { ...state, lists: action.payload };
    default:
      return state;
  }
}

export default herosModules;
