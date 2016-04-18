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

import theme from '../style/theme';
import { Actions as RouterActions } from "react-native-router-flux";
import * as JournalActions from '../actions/journal';

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
    // dispatch journal feed update
    //
  }

  componentWillReceiveProps(nextProps) {
    // remember to validate, that this really is "list"
    // console.log(nextProps)
    const dataSource = this.state.dataSource.cloneWithRows(nextProps.list.toJS())
    this.setState({ dataSource: dataSource })
    // console.log(nextProps)
  }

  _allowScroll(scrollEnabled) {
    // console.log(scrollEnabled)
    this.setState({ scrollEnabled: scrollEnabled })
  }

  renderFeed(list, listState) {

    const refreshControl = <RefreshControl
      refreshing={this.props.isLoading}
      onRefresh={this.props.refreshList}
      colors={[theme.primary]}
      tintColor={theme.primary}
      progressBackgroundColor={theme.light} />;
    // console.log(refreshControl)

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

  lol() {
    console.log('moro')
  }


  render() {
    console.log(this.props)
    return (
      <View style={styles.container}>

        {/* <Text>List :) </Text> */}

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
    paddingTop: Platform.OS === 'ios' ? 31 : 0,
    justifyContent: 'flex-start',
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F7F7F7',
  },
  // listView: {
  //   flex: 1
  // },
  actionButtonContent: {
    color: '#fff'
  },
});

// function mapStateToProps(state) {
//   return {
//     list: state.journal.get('list'),
//     listState: state.journal.get('listState')
//   }
// }

export default JournalList
