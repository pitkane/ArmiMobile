import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import TestItem from '../components/TestItem'
import StopWatch from '../components/StopWatch'
import Weather from '../components/Weather'

import SignIn from '../components/authentication/SignIn'
import SignUp from '../components/authentication/SignUp'
import HelloView from '../containers/HelloView'

const ROUTES = {
  signin: SignIn,
  signup: SignUp,
  helloview: HelloView
}

class MainView extends Component {

  renderScene(route, navigator) {
    const SceneComponent = ROUTES[route.name]
    return <SceneComponent route={route} navigator={navigator} />
  }

  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{ name: 'signin' }}
        renderScene={this.renderScene}
        configureScene={() => { return Navigator.SceneConfigs.HorizontalSwipeJump }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default MainView;
