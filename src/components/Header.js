import React, { Component } from 'react';

export class Header extends Component {
  render() {
    return (
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
        </ul>

        <button>Say hi!</button>
      </header>
    );
  }
}

export default Header;
