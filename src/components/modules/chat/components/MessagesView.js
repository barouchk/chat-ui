import React from 'react';

class MessagesView extends React.PureComponent {

    renderMessageList = (messages) => {
        return (
            messages.map((msg, i) => {
                const cls = msg.sender === this.props.user.Id ? 'sent' : 'received';
                return (
                    <div className={'sixteen wide column'} key={msg.Id}>
                        <div className={`message round ${cls}`} alt="avatar">
                            <img className="ui avatar image" src={msg.avatar} alt='avatar' />

                            <div className="content">
                                <span className="header">
                                    {msg.username}
                                </span>
                                <span className={'time'}>
                                    {msg.time}
                                </span>
                                <div className="description">{msg.text}</div>
                            </div>
                        </div>
                    </div>
                )
            })
        );
    }

    render() {
        return (
            <div className={'messages-container pb-100 pt-100'}>
                <div className={'ui grid'}>
                    {this.renderMessageList(this.props.messages)}
                </div>
            </div>
        );
    }
}

export default MessagesView;