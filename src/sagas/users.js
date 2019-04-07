
// import { delay } from 'redux-saga';
import {takeEvery,call,put} from 'redux-saga/effects';
import {GET_USERS_DATA} from '../constans/counter'
import axios from 'axios';

function* getUsersData() {
    try{
        yield put({type:'IS_FETCHING_USER'});
        // const user = yield call(axios.get,'http://jsonplaceholder.stypicode.com/users'); // 错误地址
        const user = yield call(axios.get,'http://jsonplaceholder.typicode.com/users'); // 正确地址
        yield put({type:'FETCHED_USERS_DATA',user});
    }catch(e){
        yield put({
            type:'FETCHED_USERS_FAILER',
            error:e.message
        })
    }
    // console.log('user',user)
}
export function* geeUsers() {
    yield takeEvery(GET_USERS_DATA,getUsersData)
}
