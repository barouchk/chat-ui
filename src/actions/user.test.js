import { login, logout, types } from './user'

describe('actions', () => {
  it('should create an action to login', () => {
    const userInfo = { username: 'Test user', avatar: '' }
    const expectedAction = {
      type: types.LOGIN,
      userInfo
    }
    expect(login(userInfo)).toEqual(expectedAction)
  })

  it('should create an action to logout', () => {
    const userInfo = { username: 'Test user', avatar: '' }
    const expectedAction = {
      type: types.LOGOUT,
      userInfo
    }
    expect(logout(userInfo)).toEqual(expectedAction)
  })
})