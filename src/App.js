import React, { Fragment } from 'react';
// import Toggle from './components/Toggle';
import ToggleRenderProps from './components/ToggleRenderProps';
import Header from './components/Header';
import ToggleRPC from './components/ToggleRPC';
import Modal from './components/Modal';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <ToggleRenderProps
          render={({ on, toggle }) => (
            <div>
              <Header extraClass={on} />
              {/* {on && <h1>Show me!</h1>} */}
              <button className='secondary' onClick={toggle}>
                Switch header
              </button>
            </div>
          )}
        />

        <ToggleRPC>
          {({ on, toggle }) => (
            <Fragment>
              {on ? (
                <Modal on={on} toggle={toggle}>
                  <h1>Hey! I'm from Modal</h1>
                </Modal>
              ) : (
                <button onClick={toggle}>Show modal</button>
              )}
            </Fragment>
          )}
        </ToggleRPC>
      </header>
    </div>
  );
}

export default App;
