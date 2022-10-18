import {
  ADD_HERO_IN_LIST, DELETE_FILTER, FETCH_HEROS, REMOVE_HERO_IN_LIST, SELECT_FILTER,
} from '../../redux_types';

const STATE_INITIAL_VALUE = {
  heros: [],
  filters: {
    marvel: [],
    dc: [],
    villains: [],
    All: [],
  },
  currFilter: 'All',
};

const ACTION_INITIAL_STATE = {
  type: '',
  payLoad: {},
};

function herosModules(state = STATE_INITIAL_VALUE, action = ACTION_INITIAL_STATE) {
  switch (action.type) {
    case FETCH_HEROS:
      return state;
    case ADD_HERO_IN_LIST:
      return state;
    case REMOVE_HERO_IN_LIST:
      return state;
    case SELECT_FILTER:
      return state;
    case DELETE_FILTER:
      return state;
    default:
      return state;
  }
}

export default herosModules;
