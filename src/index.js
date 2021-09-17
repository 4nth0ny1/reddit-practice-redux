import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//i added these 
import {BrowserRouter as Router} from 'react-router-dom'
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './redux/reducers/rootReducer'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

//provider means anything child has access to what is passed in. in this case it's the redux store

ReactDOM.render(
  <Router>
    <Provider store={store}> 
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);


