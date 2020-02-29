import React, { Component } from 'react';
import { UserContext } from '../UserContext';

export default class User extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {context => (
          <div>
            <h1>{context.user.name}</h1>
            <p>
              {context.user.email} {context.user.name ? '·' : ''}{' '}
              {context.user.id}
            </p>
            {context.user.name && (
              <button onClick={context.logout}>Log out</button>
            )}
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}
