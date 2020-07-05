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
      {(typeof document === 'undefined')?(                                                         //This line is needed uring development in order to open the app.
          <Router>                                                                                 
            <Stack key="root" style={styles.container}>
              <Scene key="Home" component={Home}  hideNavBar={true} />
            </Stack>
        </Router>
        ):(
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              {/* <Route exact path="/search" component={Search}/> */}
            </Switch>
        </BrowserRouter>
        )
        }        
   </Provider>
  );
}
