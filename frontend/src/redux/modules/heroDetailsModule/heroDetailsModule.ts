import { heroActionTypes, heroDetailsStateType, heroModulesTypes } from '../../../types/heroTypes';
import { HANDLE_DETAIL } from '../../redux_types';

const STATE_INITIAL_VALUE: heroDetailsStateType = {
  charter: {},
  showDetails: false,
};

const ACTION_INITIAL_STATE = {
  type: '',
  payload: {},
};

function heroDetailsModule(state = STATE_INITIAL_VALUE, aciton = ACTION_INITIAL_STATE) {
  switch (aciton.type) {
    case HANDLE_DETAIL:
      return {
        ...state,
        showDetails: !state.showDetails,
        charter: aciton.payload,
      };
    default:
      return state;
  }
}

export default heroDetailsModule;
