import React, { Component } from 'react';

export class Header extends Component {
  render() {
    return (
      <header className={`main visible-${this.props.extraClass}`}>
        <ul>
          <li>
            <a href='#home'>Home</a>
            <a href='#about'>About</a>
            <a href='#services'>Services</a>
            <a href='#contact'>Contact</a>
          </li>
        </ul>

        <button>Show modal</button>
      </header>
    );
  }
}

export default Header;
