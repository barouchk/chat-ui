import React from 'react';
import { connect } from 'react-redux';
import uuidv4 from 'uuid/v4';
import { Container, Button, Form } from 'semantic-ui-react'
import logo from '../../../assets/Spotim-logo.png';

import { login } from '../../../actions/user';
import { getRandomImage } from '../../../utils/images';

export class LoginView extends React.PureComponent {

    state = {
        isButtonDisabled: true,
        username: ''
    };

    handleChange = (e) => {
        const value = e.target.value;
        this.setState({ username: value, isButtonDisabled: value.length < 3 });
    };

    _onLoginPress = () => {
        const avatar = getRandomImage();
        this.props.login({ Id: uuidv4(), username: this.state.username, avatar });
        this.setState({ username: '' });
    };

    render() {
        return (
            <Container className={'center-content'}>
                <img src={logo} alt="logo" height={200} />
                <Form>
                    <Form.Field>
                        <input className={'login-input'} placeholder='Choose you username...' value={this.state.username}
                            onChange={this.handleChange.bind(this)} />
                    </Form.Field>
                    <Button primary type='submit' className={'huge'} disabled={this.state.isButtonDisabled} onClick={this._onLoginPress}>Login</Button>
                </Form>
            </Container>
        );
    }
}

export default connect(
    state => ({
        user: state.user,
    }),
    { login },
)(LoginView);
