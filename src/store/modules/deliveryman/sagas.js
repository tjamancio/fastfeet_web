import { toast } from 'react-toastify';
import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '~/services/api';

import { SEARCH_DELIVERYMEN_REQUEST, searchDeliverymenSuccess } from './duck';

function* search({ payload }) {
  console.tron.log(payload);
  try {
    const { data } = yield call(api.get, `deliverymen?q=${payload}`);
    yield put(searchDeliverymenSuccess(data));
  } catch (err) {
    toast.error('Falha ao buscar entregadores');
  }
}

export default all([takeLatest(SEARCH_DELIVERYMEN_REQUEST, search)]);
