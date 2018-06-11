const types = {
    LOGIN: 'user/LOGIN',
    LOGOUT: 'user/LOGOUT'
}

function login(userInfo) {
    return {
        type: types.LOGIN,
        userInfo,
    }
}

function logout(userInfo) {
    return {
        type: types.LOGOUT,
        userInfo,
    }
}

export {
    types,
    login,
    logout
}