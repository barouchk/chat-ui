import { types } from '../../actions/user';

const initialState = {
    isLogged: false,
    info: null,
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN:
            return {
                isLogged: true,
                info: action.userInfo
            }
        case types.LOGOUT:
            return {
                isLogged: false,
                info: null
            }
        default:
            return state;
    }
}