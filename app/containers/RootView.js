// TODO: wrap in redux store provider

import React, { Component } from 'react-native';
import Parse from 'parse/react-native'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import Routes from '../components/Routes'
import MainView from './MainView'

import * as reducers from '../reducers';

const logger = createLogger();
const middlewares = [thunk, logger];

const createStoreWithMiddleware = applyMiddleware.apply(thunk, middlewares)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);


class RootView extends Component {

  constructor(props, context) {
    super(props, context)
  }

  componentWillMount() {
    Parse.initialize('OUbVswqKWRhtAXCcv3oHIF7reRqaGdaqIiIBvCJU', 'yaIYz1z8rrvElPeByLkT1zFJiLarlP95M7k7j8vK');
  }

  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default RootView;
