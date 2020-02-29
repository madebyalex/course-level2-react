import React, { Fragment } from 'react';
import UserProvider from './UserProvider';
import Header from './components/Header';
import { ToggleRPC, ToggleRenderProps } from './utilities';
import { Modal } from './elements';
import User from './components/User';
import './App.scss';

function App() {
  return (
    <UserProvider>
      <div className='App'>
        <header className='App-header'>
          <ToggleRenderProps
            render={({ on, toggle }) => (
              <div>
                <Header extraClass={on} />
                {/* {on && <h1>Show me!</h1>} */}
                <button className='rounded secondary' onClick={toggle}>
                  Switch header
                </button>

                <User />
              </div>
            )}
          />

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
        </header>
      </div>
    </UserProvider>
  );
}

export default App;
