import {INCREMENT_NUM} from '../constans/counter';

const counter = (state=1,action={}) => {
    switch(action.type){
        case INCREMENT_NUM:
             return state + 1;
        default: return state
    }
}
export default counter