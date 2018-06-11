
//This is your top level React component, you may change everything

import React from 'react';
import { connect } from 'react-redux';

import { LoginView, ChatView } from './modules';

class App extends React.PureComponent {

  render() {
    return (
      this.props.user.isLogged ? (
        <ChatView/>
      ) : (
          <LoginView />
        )
    );
  }
}

export default connect(
  state => ({
    user: state.user,
  })
)(App);