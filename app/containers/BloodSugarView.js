import React, {
  Component,
  StyleSheet,
  Text,
  Navigator,
  View,
} from 'react-native';
import { connect } from 'react-redux'

import * as BloodSugarActions from '../actions/bloodsugar';

import BloodSugarList from '../components/BloodSugarList'
import BloodSugarForm from '../components/BloodSugarForm'

class BloodSugarView extends Component {

  constructor(props, context) {
    super(props, context)
  }

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

  componentDidMount() {
    // this.props.dispatch(BloodSugarActions.fetchBloodSugarList())
  }


  renderScene(route, nav) {
    switch (route.name) {
      case 'BloodSugarForm':
          return (
            <BloodSugarForm
              onAdd={this.onAdd.bind(this)} onCancel={this.onCancel.bind(this)}
            />
          )
      default:
        return (
          <BloodSugarList list={this.props.bloodsugar.get('list')} onAddStarted={this.onAddStarted.bind(this)} />
        )
    }
  }

  render() {
    return (
      <Navigator
        style={styles.navigator}
        initialRoute={{ name: 'BloodSugarList' }}
        renderScene={this.renderScene.bind(this)}
        configureScene={() => ({ ...Navigator.SceneConfigs.FloatFromRight })}
        ref={(nav) => {
          this.nav = nav
        }}
      />
    );
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

function mapStateToProps(state) {
  return {
    bloodsugar: state.bloodsugar
  }
}

export default connect(mapStateToProps)(BloodSugarView);
