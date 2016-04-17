import React, {
  Component,
  StyleSheet,
  Text,
  Navigator,
  Platform,
  View
} from 'react-native';
import { connect } from 'react-redux';

import * as JournalActions from '../actions/journal';

import JournalForm from '../components/JournalForm'
import JournalList from '../components/JournalList'

class JournalView extends Component {

  constructor(props, context) {
    super(props, context)
  }

  componentDidMount() {
    this.refreshList()
  }

  onAdd(text) {
    // console.log(this)
    this.props.dispatch(JournalActions.addJournalEntry(text))
      .then(() => {
        this.refreshList()
        this.navigator.popToTop()
      })
  }

  onRemovePress(item) {
    // console.log(item)
    this.props.dispatch(JournalActions.removeJournalEntry(item))
      .then(() => {
        this.refreshList()
        this.navigator.popToTop()
      })
  }

  refreshList() {
    this.props.dispatch(JournalActions.fetchJournalList())
  }

  renderScene(route, navigator) {
    switch (route.name) {
      case 'JournalForm':
          return (
            <JournalForm
              navigator={navigator}
              route={route}
              onAdd={this.onAdd.bind(this)}
            />
          )
      default:
        return (
          <JournalList
            list={this.props.journal.get('list')}
            listState={this.props.journal.get('listState')}
            isLoading={this.props.journal.get('isLoading')}
            refreshList={this.refreshList.bind(this)}
            onRemovePress={this.onRemovePress.bind(this)}
            navigator={navigator}
            route={route}
          />
        )
    }
  }

  // ALTERNATIVE RENDERSCENE METHOD, uses passProps to pass properties :) Going with above for now
  // renderScene(route, navigator) {
  //   let RouteComponent = route.component
  //   // console.log(navigator)
  //   return <RouteComponent navigator={navigator} {...route.passProps} />
  // }

  render() {
    // console.log(this.props.journal.get('list'))
    return (
      <Navigator
        style={styles.navigator}
        initialRoute={{ name: 'JournalList' }}
        renderScene={this.renderScene.bind(this)}
        configureScene={() => ({ ...Navigator.SceneConfigs.FloatFromRight })}
        ref={(navigator) => {
          this.navigator = navigator
        }}
      />
    )
  }
}

const styles = StyleSheet.create({
  navigator: {
    paddingTop: Platform.OS === 'ios' ? 62 : 0,
    paddingBottom:Platform.OS === 'ios' ? 30 : 0,
  },
  navbar: {
    backgroundColor: '#fff',
    height: 62,
    paddingBottom: 5,
    flexDirection: 'row',
    alignItems: 'center'
  }
});

function mapStateToProps(state) {
  return {
    journal: state.journal
  }
}
export default connect(mapStateToProps)(JournalView);
