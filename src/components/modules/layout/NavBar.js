import React from 'react';
import { Menu, Image } from 'semantic-ui-react';

import logo from '../../../assets/spotim-logo.jpg';

class NavBar extends React.PureComponent {

    _logout = () => {
        this.props.logout();
    }

    render() {
        const { username, avatar } = this.props.user.info;
        return (
            <Menu className={'fixed'}>
                <Menu.Menu>
                    <Menu.Item>
                        <img src={logo} alt="logo" className="NavBar-logo" /> SPOT.IM
            </Menu.Item>
                </Menu.Menu>
                <Menu.Menu position="right">
                    <Menu.Item >
                        <Image src={avatar} avatar circular />
                        <span>{username}</span>
                    </Menu.Item>
                    <Menu.Item className={'logout-item'} onClick={this._logout}>
                        Logout
            </Menu.Item>
                </Menu.Menu>
            </Menu>
        );
    }
}

export default NavBar;