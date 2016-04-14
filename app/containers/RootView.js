// TODO: wrap in redux store provider

import React, { Component } from 'react-native';
import Parse from 'parse/react-native'

import MainView from './MainView'

class RootView extends Component {

  componentWillMount() {
    Parse.initialize('OUbVswqKWRhtAXCcv3oHIF7reRqaGdaqIiIBvCJU', 'yaIYz1z8rrvElPeByLkT1zFJiLarlP95M7k7j8vK');
  }

  render() {
    return (
      <MainView />
    );
  }
}

export default RootView;
