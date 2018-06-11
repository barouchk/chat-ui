import React from 'react';
import { Container, Input, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux';
import uuidv4 from 'uuid/v4';

import { NavBar } from '../layout';
import { MessagesView } from './components';

import { sendMessage } from '../../../socket/Events';
import { logout } from '../../../actions/user';
import { socket, EVENT_NAME } from '../../../socket/Events';

export class ChatView extends React.PureComponent {

    state = {
        message: '',
        isButtonDisabled: true,
        messages: []
    }

    componentDidMount() {
        this.initSocket(socket);
    }

    initSocket = (socket) => {

        const _this = this;

        socket.on(EVENT_NAME, (data) => {
            let msg = [..._this.state.messages];
            msg.push(data);

            _this.setState({ messages: msg });
        });
    }

    _messageChanged = (e) => {
        const message = e.target.value;
        this.setState({ message, isButtonDisabled: message === '' });
    }

    _submitMessage = () => {
        if (this.state.message === '') {
            return;
        }

        const { avatar, username } = this.props.user.info;

        sendMessage({
            Id: uuidv4(),
            sender: this.props.user.info.Id, avatar,
            username, text: this.state.message
        });
        this.setState({ message: '', isButtonDisabled: true });
        window.scrollTo(0, document.body.scrollHeight);
    }

    _onKeyPress = (e) => {
        if (e.key === "Enter") {
            this._submitMessage();
        }
    }

    render() {
        return (
            <div>
                <NavBar logout={this.props.logout} user={this.props.user} />
                <Container>
                    <MessagesView user={this.props.user.info} messages={this.state.messages} />
                    <div className={'spotim-message-container fixed'}>
                        <div>
                            <Input className={'message-input-wrapper'}
                                placeholder='Type a message' type='text' action
                                value={this.state.message}
                                onChange={this._messageChanged.bind(this)} onKeyPress={this._onKeyPress.bind(this)}>
                                <input className={'spotim-message-input'} />
                                <Icon className={'send-message-icon'} name='send' size='big' onClick={this._submitMessage} disabled={this.state.isButtonDisabled} />
                            </Input>

                        </div >
                    </div>
                </Container >
            </div>
        );
    }
}

export default connect(
    state => ({
        user: state.user,
    }),
    { logout },
)(ChatView);