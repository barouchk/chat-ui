import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import { ChatView } from './ChatView';
import NavBar from '../layout/NavBar'
import { MessagesView } from './components';
import { Input, Icon } from 'semantic-ui-react'

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

    const state = {
        message: '',
        isButtonDisabled: true,
        messages: []
    }

    const enzymeWrapper = mount(<ChatView {...props} />)

    return {
        props,
        state,
        enzymeWrapper
    }
}

describe('components', () => {
    describe('ChatView', () => {
        it('should render NavBar', () => {
            const { enzymeWrapper, props, state } = setup()
            const { user, login } = enzymeWrapper.find(NavBar).props();

            expect(user).toBe(props.user)
            expect(login).toBe(props.login)

        })

        it('should render MessagesView', () => {
            const { enzymeWrapper, props, state } = setup()
            const messagesView = enzymeWrapper.find(MessagesView)
            const { user, messages } = messagesView.props();

            expect(user).toBe(props.user.info)
            expect(messages.length).toBe(0)
        })

        it('should render MessagesView', () => {
            const { enzymeWrapper, props, state } = setup()
            const messageInput = enzymeWrapper.find(Input)
            const submitIcon = enzymeWrapper.find(Icon)

            const message = 'test message';
            messageInput.props().onChange({ target: { value: message } });
            expect(enzymeWrapper.state().isButtonDisabled).toBe(false)
            expect(enzymeWrapper.state().message).toBe(message)
        })

    })
})