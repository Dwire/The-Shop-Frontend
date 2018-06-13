import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import App from './App';

const initialState = { currentUser: {}, localUsers: [] };

const authReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case 'SET_CURRENT_USER':
      const { id, name, email, guru, project } = action.user;
      return { ...state, currentUser: { id, name, email, guru, project } };
    case 'LOGOUT_USER':
      return { ...state, currentUser: {} };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  auth: authReducer
});

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

const Root = ({ store }) => {
  return (
    <Router>
      <Provider store={store}>
        <Route path="/" component={App} />
      </Provider>
    </Router>
  );
};

ReactDOM.render(<Root store={store} />, document.getElementById('root'));


// // w/create-react-app
// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import registerServiceWorker from "./registerServiceWorker";
//
// // added based on Nat
// import { Provider } from "react-redux";
// import { createStore, applyMiddleware } from "redux";
// import userReducer from "./reducers/index";
// import thunk from "redux-thunk"
//
// const store = createStore(userReducer, applyMiddleware(thunk));
//
// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );
// registerServiceWorker();
