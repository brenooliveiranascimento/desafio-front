import {
  ADD_HEROS,
  ADD_HERO_IN_LIST, CREATE_FILTER, DELETE_FILTER, FETCH_HEROS, REMOVE_HERO_IN_LIST, SELECT_FILTER,
} from '../../redux_types';

const STATE_INITIAL_VALUE = {
  charter: [],
  filters: {
    marvel: [1, 2, 3, 4, 5],
    dc: [6, 7, 8, 9],
    villains: [10, 11, 12],
    All: [],
  },
  currFilter: 'All',
  countShow: 1,
};

const ACTION_INITIAL_STATE: any = {
  type: '',
  payload: {},
};

function herosModules(state = STATE_INITIAL_VALUE, action = ACTION_INITIAL_STATE) {
  switch (action.type) {
    case FETCH_HEROS:
      return { ...state, charter: action.payload };
    case ADD_HEROS:
      return {
        ...state,
        charter: [...state.charter, ...action.payload],
        countShow: state.countShow + 30,
      };
    case ADD_HERO_IN_LIST:
      return state;
    case REMOVE_HERO_IN_LIST:
      return state;
    case SELECT_FILTER:
      return { ...state, currFilter: action.payload, countShow: 1 };
    case CREATE_FILTER:
      return { ...state, filters: { ...state.filters, [action.payload]: [] } };
    case DELETE_FILTER:
      return state;
    default:
      return state;
  }
}

export default herosModules;
