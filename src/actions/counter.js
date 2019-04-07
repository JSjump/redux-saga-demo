import {INCREMENT_NUM,INCREMENT_NUM_ASYNC} from '../constans/counter';
export const increment = () =>{
    return {
        type:INCREMENT_NUM
    }
}
export const incrementAsync =() => {
    return {
        type:INCREMENT_NUM_ASYNC
    }
}