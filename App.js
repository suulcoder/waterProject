import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import {loadState,saveState} from './store'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Stack, Scene } from "react-native-router-flux";
import createSagaMiddleware from 'redux-saga';
import Home from './src/components/Home';
import mainSaga from './src/sagas';
import React from 'react';
import reducer from './src/reducers';
import throttle from 'lodash/throttle';
import Contact from './src/components/Contact';
import About from './src/components/Info';
import Info from './src/components/Info';

//localStorage.clear();
let persistedState = loadState()

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer,persistedState,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mainSaga);
store.subscribe(throttle(()=>{
  saveState(store.getState());
}),5000)

export default function App() {
  return (
    <Provider store={store}>
      <Router>                                                                                 
        <Stack key="root" >
          <Scene key="Home" component={Home}  hideNavBar={true} />
          <Scene key="Contact" component={Contact}  hideNavBar={true} />
          <Scene key="About" component={About}  hideNavBar={true} />
          <Scene key="Info" component={Info}  hideNavBar={true} />
        </Stack>
      </Router>        
   </Provider>
  );
}
