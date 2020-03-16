import produce from 'immer';
import { createAction, handleActions } from 'redux-actions';

export const SEARCH_RECIPIENTS_REQUEST = '@RECIPIENT/SEARCH_REQUEST';
export const SEARCH_RECIPIENTS_SUCCESS = '@RECIPIENT/SEARCH_SUCCESS';

export const searchRecipientsRequest = createAction(SEARCH_RECIPIENTS_REQUEST);
export const searchRecipientsSuccess = createAction(SEARCH_RECIPIENTS_SUCCESS);

const defaultState = {
  data: []
};

const reducer = handleActions(
  {
    [SEARCH_RECIPIENTS_SUCCESS]: (state, { payload }) =>
      produce(state, draft => {
        draft.data = payload;
      })
  },
  defaultState
);

export default reducer;
