import React, { Fragment, Component } from 'react';
import { UserContext } from './UserContext';
import Header from './components/Header';
import { ToggleRPC, ToggleRenderProps } from './utilities';
import { Modal } from './elements';
import User from './components/User';
import './App.scss';

class UserProvider extends Component {
  state = {
    id: '249',
    name: 'Alex',
    email: 'hello@alexander.works'
  };

  render() {
    return (
      <UserContext.Provider
        value={{
          user: this.state
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

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
                <button className='secondary' onClick={toggle}>
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
                  <button onClick={toggle}>Show modal</button>
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
