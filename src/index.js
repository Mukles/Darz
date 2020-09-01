import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Wrapper from './Components/Wrapper';
import Store from './Components/redux/Store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <Wrapper >
        <Router>
          <App />
        </Router>
      </Wrapper>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
