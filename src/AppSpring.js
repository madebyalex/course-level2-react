import React, { useState, Fragment } from 'react';
import { useSpring, animated as a } from 'react-spring';
import UserProvider from './UserProvider';
import { ToggleRPC } from './utilities';
import Drag from './components/Drag';
import './App.scss';

function App() {
  const [magicStatus, setMagicStatus] = useState(false);

  const asideTextProps = useSpring({
    opacity: magicStatus ? 0.2 : 0,
    transform: magicStatus
      ? 'rotate(180deg) translateX(0px)'
      : 'rotate(180deg) translateX(20px)',
    letterSpacing: magicStatus ? '0px' : '10px'
  });

  return (
    <UserProvider>
      <div className='App'>
        <header className='App-header'>
          <div className='toggles-wrap'>
            <Drag />

            <ToggleRPC className='toggle'>
              {({ on, toggle }) => (
                <Fragment>
                  <button className='rounded secondary' onClick={toggle}>
                    Do some magic
                  </button>

                  {on ? setMagicStatus(true) : setMagicStatus(false)}

                  <a.div className='aside-text' style={asideTextProps}>
                    <h1>Maaaaagic!</h1>
                  </a.div>
                </Fragment>
              )}
            </ToggleRPC>
          </div>
        </header>
      </div>
    </UserProvider>
  );
}

export default App;
