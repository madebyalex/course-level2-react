import React, { Component } from 'react';
import { UserContext } from '../UserContext';

export class Header extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {context => (
          <header className={`main visible-${this.props.extraClass}`}>
            <ul>
              <li>
                <a href='#home'>Home</a>
              </li>
              <li>
                <a href='#about'>About</a>
              </li>
              <li>
                <a href='#services'>Services</a>
              </li>
              <li>
                <a href='#contact'>Contact</a>
              </li>
              {context.user.name ? (
                <li>
                  <button onClick={context.logout}>Logout</button>
                </li>
              ) : (
                <li>
                  <button onClick={() => console.log('Hello!')}>Log In</button>
                </li>
              )}
            </ul>

            <button className='rounded'>Say hi!</button>
          </header>
        )}
      </UserContext.Consumer>
    );
  }
}

export default Header;
