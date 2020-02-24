import React from 'react';
import Toggle from './components/Toggle';
import ToggleRenderProps from './components/ToggleRenderProps';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Toggle>
          <h1>Hello there!</h1>
        </Toggle>
        <ToggleRenderProps
          render={({ on, toggle }) => (
            <div>
              {on && <h1>Show me!</h1>}
              <button onClick={toggle}>Show / Hide</button>
            </div>
          )}
        />
      </header>
    </div>
  );
}

export default App;
