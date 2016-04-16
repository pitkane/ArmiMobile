import React, {
  Component,
  StyleSheet,
  Text,
  Navigator,
  Platform,
  View
} from 'react-native';
import { connect } from 'react-redux';

import JournalForm from '../components/JournalForm'
import JournalList from '../components/JournalList'

class JournalView extends Component {

  // renderScene(route, navigator) {
  //   if (route.component) {
  //     const RouteComponent = route.component;
  //     return <RouteComponent navigator={navigator} route={route} {...this.props} />
  //   }
  // }

  onCancel() {
    this.nav.pop()
  }

  onAdd() {
    this.nav.pop()
  }

  onAddStarted() {
    this.nav.push({
      name: 'JournalForm'
    })
  }


  renderScene(route, nav) {
    switch (route.name) {
      case 'JournalForm':
          return (
            <JournalForm
              onAdd={this.onAdd.bind(this)} onCancel={this.onCancel.bind(this)}
            />
          )
      default:
        return (
          <JournalList onAddStarted={this.onAddStarted.bind(this)} />
        )
    }
  }


  render() {
    return (
      <Navigator
        style={styles.navigator}
        initialRoute={{ name: 'JournalList' }}
        renderScene={this.renderScene.bind(this)}
        configureScene={() => ({ ...Navigator.SceneConfigs.FloatFromRight })}
        ref={(nav) => {
          this.nav = nav
        }}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default JournalView;
