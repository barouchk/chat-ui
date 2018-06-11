import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import NavBar from './NavBar'

Enzyme.configure({ adapter: new Adapter() });

function setup() {
    const props = {
        logout: jest.fn(),
        user: {
            isLogged: true,
            info: {
                username: 'test user',
                avatar: 'avatar.jpg'
            }
        }
    }

    const enzymeWrapper = mount(<NavBar {...props} />)

    return {
        props,
        enzymeWrapper
    }
}

describe('components', () => {
    describe('NavBar', () => {
        it('should render NavBar', () => {
            const { enzymeWrapper, props } = setup()
            const headerLogo = enzymeWrapper.find('img').first();

            expect(headerLogo.hasClass('NavBar-logo')).toBe(true)

            const userLogo = enzymeWrapper.find('img').last();
            expect(userLogo.props.src).toBe(props.avatar);

            const usernameDisplay = enzymeWrapper.find('span');
            expect(usernameDisplay.text()).toBe(props.user.info.username)
        })

        it('should call logout', () => {
            const { enzymeWrapper, props } = setup()
            const logoutItem = enzymeWrapper.find('a');
            expect(logoutItem.hasClass('logout-item')).toBe(true)
            logoutItem.props().onClick()
        })
    })
})