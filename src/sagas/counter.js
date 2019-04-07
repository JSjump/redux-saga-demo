import {takeLatest,put,call} from 'redux-saga/effects';
import {INCREMENT_NUM_ASYNC} from '../constans/counter'
import {increment} from '../actions/counter';


const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

function* incrementAsync() {
 yield call(delay,2000);
 yield put(increment())
}
export function* mySaga() {
yield takeLatest(INCREMENT_NUM_ASYNC,incrementAsync)
}
