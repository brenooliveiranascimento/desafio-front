import {
  ADD_CHARTER_IN_LIST,
  ADD_HEROS,
  CREATE_LIST,
  FETCH_HEROS,
  LOAD_END,
  LOAD_INIT,
  REMOVE_CHARTER_IN_LIST,
  REMOVE_LIST,
  SELECT_LIST,
  SET_LIST,
} from '../../redux_types';
import { ACTION_INITIAL_STATE, STATE_INITIAL_VALUE } from '../../storeDefaulstValues/herosDefaultValues';

function herosModules(state = STATE_INITIAL_VALUE, action = ACTION_INITIAL_STATE) {
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
