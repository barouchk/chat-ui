import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

import { LoginView } from './LoginView'

Enzyme.configure({ adapter: new Adapter() });

function setup() {
    const state = {
        isButtonDisabled: true,
        username: ''
    }

    const enzymeWrapper = mount(<LoginView />)

    return {
        state,
        enzymeWrapper
    }
}

describe('components', () => {
    describe('LoginView', () => {
        it('should render self and subcomponents', () => {
            const { enzymeWrapper, state } = setup()

            expect(enzymeWrapper.find('Container').hasClass('center-content')).toBe(true)
            expect(enzymeWrapper.find('input').hasClass('login-input')).toBe(true)

            const loginInput = enzymeWrapper.find('input');
            const loginInputProps = loginInput.props()

            const submitButton = enzymeWrapper.find('button');
            expect(submitButton.hasClass('huge')).toBe(true);

            expect(loginInputProps.placeholder).toEqual('Choose you username...')
            loginInput.props.value = enzymeWrapper.state().username;
            loginInputProps.onChange({ target: { value: '1234' } });
            expect(enzymeWrapper.state().isButtonDisabled).toBe(false)

            enzymeWrapper.find('button').props.disabled = enzymeWrapper.state().isButtonDisabled;
            expect(enzymeWrapper.find('button').props.disabled).toBe(false);
        })
    })
})