import produce from 'immer';
import { createAction, handleActions } from 'redux-actions';

export const SEARCH_DELIVERYMEN_REQUEST = '@DELIVERYMAN/SEARCH_REQUEST';
export const SEARCH_DELIVERYMEN_SUCCESS = '@DELIVERYMAN/SEARCH_SUCCESS';

export const searchDeliverymenRequest = createAction(
  SEARCH_DELIVERYMEN_REQUEST
);
export const searchDeliverymenSuccess = createAction(
  SEARCH_DELIVERYMEN_SUCCESS
);

const defaultState = {
  data: [],
};

const reducer = handleActions(
  {
    [SEARCH_DELIVERYMEN_SUCCESS]: (state, { payload }) =>
      produce(state, draft => {
        draft.data = payload;
      }),
  },
  defaultState
);

export default reducer;
