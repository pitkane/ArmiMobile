import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import Moment from 'moment'
require('moment/locale/fi')

import { connect } from 'react-redux'

import TaskList from '../components/TaskList'
import TaskForm from '../components/TaskForm'

class PluralTodo extends Component {

  constructor(props, context) {
    super(props, context)
  }

  onAddStarted() {
    this.nav.push({
      name: 'taskform'
    })
  }

  onDone(todo) {
    this.props.dispatch({
      type: 'TESTING_TODO_DONE',
      payload: todo
    })
  }

  onAdd(task) {
    this.props.dispatch({
      type: 'TESTING_ADD_TODO',
      payload: task
    })
    this.nav.pop()
  }

  onCancel() {
    this.nav.pop()
  }

  onToggle() {
    this.props.dispatch({
      type: 'TESTING_TOGGLE_STATE'
    })
  }

  renderScene(route, nav) {
    switch (route.name) {
      case 'taskform':
          return (<TaskForm
            onAdd={this.onAdd.bind(this)} onCancel={this.onCancel.bind(this)}
                  />)
      default:
        return (<TaskList
          onToggle={this.onToggle.bind(this)}
          filter={this.props.testing.filter}
          onDone={this.onDone.bind(this)}
          onAddStarted={this.onAddStarted.bind(this)}
          todos={this.props.testing.todos}
                />)
    }
  }

  configureScene() {
    return Navigator.SceneConfigs.FloatFromBottom
  }

  render() {
    return (
      <Navigator
        configureScene={this.configureScene}
        initialRoute={{ name: 'tasklist', index: 0 }}
        ref={(nav) => {
          this.nav = nav
        }}
        renderScene={this.renderScene.bind(this)}
      />

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

function mapStateToProps(state) {
  return { testing: state.testing }
}

export default connect(mapStateToProps)(PluralTodo);
