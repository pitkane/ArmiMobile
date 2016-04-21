import React, {
  Component,
  StyleSheet,
  Text,
  Navigator,
  Platform,
  View
} from 'react-native';
import { connect } from 'react-redux';
import NavigationBar from 'react-native-navbar';
import theme from '../style/theme';
import NavRouteMapper from '../components/common/navbarRouteMapper';
import Parse from 'parse/react-native'

import { Actions as RouterActions } from "react-native-router-flux";
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

  onRemovePress(item) {
    // console.log(item)
    this.props.dispatch(JournalActions.removeJournalEntry(item))
      .then(() => {
        this.refreshList()
        // this.navigator.popToTop()
      })
  }

  refreshList() {
    this.props.dispatch(JournalActions.fetchJournalList())
  }


  _onAddStart() {
    RouterActions.journalform()
    // RouterActions.journalform({ rightTitle: 'WTF', onRight: () => {console.log(this)} })
  }

  renderJournalForm() {
    return (
      <JournalForm />
    )
  }

  renderJournalList() {
    return (
      <JournalList
        list={this.props.journal.get('list')}
        listState={this.props.journal.get('listState')}
        isLoading={this.props.journal.get('isLoading')}
        onAddStart={this._onAddStart.bind(this)}
        refreshList={this.refreshList.bind(this)}
        onRemovePress={this.onRemovePress.bind(this)}

      />
    )
  }

  render() {

    switch (this.props.name) {
          case 'journalform':
              return this.renderJournalForm()
          default:
            return this.renderJournalList()
        }
  }
}

const styles = StyleSheet.create({

});

function mapStateToProps(state) {
  return {
    journal: state.journal
  }
}
export default connect(mapStateToProps)(JournalView);
