import { toast } from 'react-toastify';
import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '~/services/api';

import { SEARCH_RECIPIENTS_REQUEST, searchRecipientsSuccess } from './duck';

function* search({ payload }) {
  console.tron.log(payload);
  try {
    const { data } = yield call(api.get, `recipients?q=${payload}`);
    yield put(searchRecipientsSuccess(data));
  } catch (err) {
    toast.error('Falha ao buscar destinatários');
  }
}

export default all([takeLatest(SEARCH_RECIPIENTS_REQUEST, search)]);
