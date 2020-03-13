import produce from 'immer';
import { createAction, handleActions } from 'redux-actions';

export const SEARCH_DELIVERIES_REQUEST = '@DELIVERY/SEARCH_REQUEST';
export const SEARCH_DELIVERIES_SUCCESS = '@DELIVERY/SEARCH_SUCCESS';

export const searchDeliveriesRequest = createAction(SEARCH_DELIVERIES_REQUEST);
export const searchDeliveriesSuccess = createAction(SEARCH_DELIVERIES_SUCCESS);

const defaultState = {
  data: [],
};

const reducer = handleActions(
  {
    [SEARCH_DELIVERIES_SUCCESS]: (state, { payload }) =>
      produce(state, draft => {
        draft.data = payload;
      }),
  },
  defaultState
);

export default reducer;
