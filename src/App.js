import React from 'react';
// import Toggle from './components/Toggle';
import ToggleRenderProps from './components/ToggleRenderProps';
import Header from './components/Header';
import ToggleRPC from './components/ToggleRPC';
import Portal from './components/Portal';
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
            <div>
              {/* {on && <h1>Show me!</h1>} */}
              {on && (
                <Portal>
                  <h3>Hello from the opposite side of the Earth! :)</h3>
                </Portal>
              )}
              <button onClick={toggle}>Show / Hide</button>
            </div>
          )}
        </ToggleRPC>
      </header>
    </div>
  );
}

export default App;
