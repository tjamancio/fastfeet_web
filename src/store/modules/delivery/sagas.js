import { toast } from 'react-toastify';
import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '~/services/api';

import { SEARCH_DELIVERIES_REQUEST, searchDeliveriesSuccess } from './duck';

function* search({ payload }) {
  console.tron.log(payload);
  try {
    const { data } = yield call(api.get, `deliveries?q=${payload}`);
    yield put(searchDeliveriesSuccess(data));
  } catch (err) {
    toast.error('Falha ao buscar encomendas');
  }
}

export default all([takeLatest(SEARCH_DELIVERIES_REQUEST, search)]);
