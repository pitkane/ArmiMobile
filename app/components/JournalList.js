import React, {
  Component,
  StyleSheet,
  Text,
  TextInput,
  Platform,
  RefreshControl,
  ListView,
  TouchableHighlight,
  View
} from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Parse from 'parse/react-native'

import theme from '../style/theme';
import { Actions as RouterActions } from "react-native-router-flux";
import * as JournalActions from '../actions/journal';
import './UserAgent'
import JournalForm from './JournalForm'
import JournalListItem from './JournalListItem'
import ActionButton from './ActionButton'

class JournalList extends Component {

  constructor(props, context) {
    super(props, context)

    this.state = {
      scrollEnabled: true,
      dataSource: new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 })
    }
  }

  componentDidMount() {

    // Enable LiveQuery
    const query = new Parse.Query('Journal')
    const subscription = query.subscribe()
    subscription.on('create', (item) => { this.props.refreshList() });
    subscription.on('delete', (item) => { this.props.refreshList() });
    subscription.on('update', (item) => { this.props.refreshList() });
  }

  componentWillReceiveProps(nextProps) {
    // remember to validate, that this really is "list"
    const dataSource = this.state.dataSource.cloneWithRows(nextProps.list.toJS())
    this.setState({ dataSource: dataSource })
  }

  _allowScroll(scrollEnabled) {
    console.log('scroll')
    this.setState({ scrollEnabled: scrollEnabled })
  }

  renderFeed(list, listState) {

    const refreshControl = <RefreshControl
      refreshing={this.props.isLoading}
      onRefresh={this.props.refreshList}
      colors={[theme.primary]}
      tintColor={theme.primary}
      progressBackgroundColor={theme.light} />;

    switch (listState) {
      case 'loading':
        return <Text>Loading... :)</Text> //<Loading />;
      case 'failed':
        return <Text>Failed... :)</Text>
      default:
        return (
          <View style={styles.container}>

            <ListView
              scrollEnabled={this.state.scrollEnabled}
              key={this.props.list}
              dataSource={this.state.dataSource}
              renderRow={item => <JournalListItem allowScroll={this._allowScroll.bind(this)} item={item} onRemovePress={this.props.onRemovePress} />}
              style={[styles.listView]}
            />
          </View>
        )
    }
  }

  render() {
    return (
      <View style={styles.container}>

        {this.renderFeed(this.props.list, this.props.listState)}

        <ActionButton onPress={this.props.onAddStart}>
          <Icon name={'add'} size={24} style={styles.actionButtonContent}></Icon>
        </ActionButton>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#F7F7F7',
  },
  actionButtonContent: {
    color: '#fff'
  },
});

export default JournalList
