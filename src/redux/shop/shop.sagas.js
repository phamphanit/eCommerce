import { call, put, takeEvery, all } from 'redux-saga/effects';
import * as shopActions from './shop.actions';
import ShopActionTypes from './shop.types';
import {
        firestore,
        convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils';

function* fetchCollection() {
        try {
                const collectionRef = firestore.collection('collections');
                const snapshot = yield collectionRef.get();
                const collectionMap = yield call(convertCollectionsSnapshotToMap, snapshot);
                yield put(shopActions.fetchColletionSuccess(collectionMap));
        } catch (e) {
                yield put({ type: ShopActionTypes.COLLECTION_FETCH_FAILURE, payload: e });
        }
}


function* watchFetchCollection() {
        yield takeEvery(ShopActionTypes.COLLECTION_FETCH_START, fetchCollection);
}
export function* shopSagas() {
        yield all([call(watchFetchCollection)]);
}
