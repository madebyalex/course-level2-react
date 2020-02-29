import React, { useState, Fragment } from 'react';
import { useSpring, animated as a } from 'react-spring';
import UserProvider from './UserProvider';
import Header from './components/Header';
import { ToggleRPC, ToggleRenderProps } from './utilities';
import { Modal } from './elements';
import User from './components/User';
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
          <ToggleRenderProps
            render={({ on, toggle }) => (
              <div>
                <Header extraClass={on} />
                <button className='rounded secondary' onClick={toggle}>
                  Switch header
                </button>

                <User />
              </div>
            )}
          />

          <div className='toggles-wrap'>
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

            <ToggleRPC>
              {({ on, toggle }) => (
                <Fragment>
                  {on ? (
                    <Modal on={on} toggle={toggle}>
                      <h1>Hey! I'm from Modal</h1>
                      <p>Welcome onboard!</p>
                    </Modal>
                  ) : (
                    <button className='rounded' onClick={toggle}>
                      Show modal
                    </button>
                  )}
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
