import React, { Component } from 'react';
import { UserContext } from './UserContext';

export default class UserProvider extends Component {
  state = {
    id: 'React Inc.',
    name: 'Alex',
    email: 'hello@react.js'
  };

  logout = () => {
    this.setState({
      id: null,
      name: '',
      email: ''
    });
  };

  render() {
    return (
      <UserContext.Provider
        value={{
          user: this.state,
          logout: this.logout
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
