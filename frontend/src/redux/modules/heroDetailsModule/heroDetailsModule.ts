import { heroActionTypes, heroDetailsStateType, heroModulesTypes } from '../../../types/heroTypes';
import { HANDLE_DETAIL } from '../../redux_types';
import { DETAILS_ACTION_INITIAL_STATE, DETAILS_STATE_INITIAL_VALUE } from '../../storeDefaulstValues/herosDefaultValues';

function heroDetailsModule(
  state = DETAILS_STATE_INITIAL_VALUE,
  aciton = DETAILS_ACTION_INITIAL_STATE,
) {
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
