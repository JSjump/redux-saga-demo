
// import { delay } from 'redux-saga';
import {all,fork} from 'redux-saga/effects';


import *as counter from './counter';
import *as user from './users';
export default function* rootSaga() {
    yield all([
        // geeUsers(),
        // mySaga()
        ...Object.values(counter),
        ...Object.values(user)
    ].map(fork))
}