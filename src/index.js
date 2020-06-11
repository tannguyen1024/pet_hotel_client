import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Component/App/App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";
import createSagaMiddleware from "redux-saga";



const getPets = (state = [], action) => {
   switch (action.type) {
     case "SET_PETS":
       console.log(action.payload)
       return action.payload;
     default:
       return state;
   }
}

const sagaMiddleware = createSagaMiddleware();


function* rootSaga() {
  yield takeLatest('FETCH_PETS', fetchPets);
}

function* fetchPets() {
  try {
    const response = yield axios.get('/pets');
    console.log('in fetchPets', response.data);
    yield put({
      type: 'SET_PETS',
      payload: response.data
    });
  } catch (error) {
    console.log(error);
    alert('Error getting Pets')
  }
}

const rootReducer = combineReducers({
  getPets,
});

const storeInstance = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga)



ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
