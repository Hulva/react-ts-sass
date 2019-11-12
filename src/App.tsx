import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import { AppStore } from './store';
import { ChatState } from './store/chat/types';
import { SystemState } from './store/system/types';
import { sendMessage } from './store/chat/actions';
import { updateSession } from './store/system/actions';

const mapStateToProps = (state: AppStore) => ({
  system: state.system,
  chat: state.chat,
  hello: state.hello,
});

interface AppProps {
  sendMessage: typeof sendMessage
  updateSession: typeof updateSession
  chat: ChatState
  system: SystemState
}

const App: React.Component<AppProps> = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Hello name="TypeScript" enthusiasmLevel={10} />
    </div>
  );
}

export default App;
