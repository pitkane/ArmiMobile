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

const Icon = require('react-native-vector-icons/Ionicons');

class MainView extends Component {

  onChangeTab(tab) {
    // should be importet from actions
    this.props.dispatch({ type: 'CHANGE_TAB', payload: tab })
  }

  render() {
    return (
      <View style={{flex:1}}>
        <TabBarIOS translucent={true} >
          <Icon.TabBarItem
            iconName='ios-clock-outline'
            selectedIconName='ios-clock'
            title='Journal'
            selected={this.props.navigation.currentTab === 'JOURNAL'}
            onPress={() => { this.onChangeTab('JOURNAL') }}>
            <JournalView />
          </Icon.TabBarItem>

          <Icon.TabBarItem
            iconName='ios-location-outline'
            selectedIconName='ios-location'
            title='Blood Sugar'
            selected={this.props.navigation.currentTab === 'BLOODSUGAR'}
            onPress={() => { this.onChangeTab('BLOODSUGAR') }}>
            <BloodSugarView />
          </Icon.TabBarItem>

          <Icon.TabBarItem
            iconName='ios-flame-outline'
            selectedIconName='ios-flame'
            title='Blood Pressure'
            selected={this.props.navigation.currentTab === 'BLOODPRESSURE'}
            onPress={() => { this.onChangeTab('BLOODPRESSURE') }}>
            <BloodPressureView />
          </Icon.TabBarItem>

          <Icon.TabBarItem
            iconName='stats-bars'
            selectedIconName='stats-bars'
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
