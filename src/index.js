import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignIn';
import {Route, BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
          <Route exact path="/signin" component={SignIn}/>
          <Route exact path="/signup" component={SignUp}/>
          <Route exact path="/home" component={App}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
