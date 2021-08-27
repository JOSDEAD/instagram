import './wdyr';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FirebaseContext from './context/firebase';
import {firebase,FieldValue} from './lib/firebase'
import './styles/app.css'
import { store } from './state/store'
import { Provider } from 'react-redux';
ReactDOM.render(
  <Provider store={store}>
    <FirebaseContext.Provider value={{firebase,FieldValue}}>
      <App />
    </FirebaseContext.Provider>
  </Provider>,
  document.getElementById('root')
);

