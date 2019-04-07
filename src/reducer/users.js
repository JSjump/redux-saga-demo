
const initialState = {
    isFetching: false,
    error: null,
    users:null,
} 

const users = (state=initialState,action={}) => {
    switch(action.type){
        case 'IS_FETCHING_USER':
        return {
            isFetching:true,
            error: null,
            users:null,
        };
        case 'FETCHED_USERS_DATA':
        return {
            isFetching:false,
            error:null,
            user: action.user,
        };
        case 'FETCHED_USERS_FAILER':
        return {
            isFetching:false,
            error: action.error,
            user: null,
        };
        default: return state
    }
}
export default users