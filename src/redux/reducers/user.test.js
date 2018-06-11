import reducer from './user'
import { types } from '../../actions/user'

describe('user reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            {
                isLogged: false,
                info: null,
            }
        )
    })

    it('should handle LOGIN', () => {
        const userInfo = { username: 'Test user', avatar: '' };
        expect(
            reducer(undefined, {
                type: types.LOGIN,
                userInfo
            })
        ).toEqual(
            {
                isLogged: true,
                info: userInfo
            })
    })

    it('should handle LOGOUT', () => {
        const userInfo = { username: 'Test user', avatar: '' };
        expect(
            reducer(undefined, {
                type: types.LOGOUT,
                userInfo
            })
        ).toEqual(
            {
                isLogged: false,
                info: null
            })
    })
})