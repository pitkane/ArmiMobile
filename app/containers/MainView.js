import React, {
  TabBarIOS,
  Component,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';

import JournalView from './JournalView'
import BloodSugarView from './BloodSugarView'
import BloodPressureView from './BloodPressureView'
import NotesView from './NotesView'

const Icon = require('react-native-vector-icons/Ionicons')

class MainView extends Component {

  onChangeTab(tab) {
    // should be importet from actions
    this.props.dispatch({ type: 'CHANGE_TAB', payload: tab })
  }

  render() {
    return (
      <View style={{flex:1}}>
        <TabBarIOS translucent={false} >
          <Icon.TabBarItem
            iconName='ios-calendar-outline'
            selectedIconName='ios-calendar-outline'
            title='Journal'
            selected={this.props.navigation.currentTab === 'JOURNAL'}
            onPress={() => { this.onChangeTab('JOURNAL') }}>
            <JournalView />
          </Icon.TabBarItem>

          <Icon.TabBarItem
            iconName='thermometer'
            selectedIconName='thermometer'
            title='Blood Sugar'
            selected={this.props.navigation.currentTab === 'BLOODSUGAR'}
            onPress={() => { this.onChangeTab('BLOODSUGAR') }}>
            <BloodSugarView />
          </Icon.TabBarItem>

          <Icon.TabBarItem
            iconName='heart'
            selectedIconName='heart'
            title='Blood Pressure'
            selected={this.props.navigation.currentTab === 'BLOODPRESSURE'}
            onPress={() => { this.onChangeTab('BLOODPRESSURE') }}>
            <BloodPressureView />
          </Icon.TabBarItem>

          <Icon.TabBarItem
            iconName='clipboard'
            selectedIconName='clipboard'
            title='Notes'
            selected={this.props.navigation.currentTab === 'NOTES'}
            onPress={() => { this.onChangeTab('NOTES') }}>
            <NotesView />
          </Icon.TabBarItem>

        </TabBarIOS>

        {/*<RegistrationView />*/}
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

function mapStateToProps(state) {
  return { navigation: state.navigation }
}

export default connect(mapStateToProps)(MainView);
