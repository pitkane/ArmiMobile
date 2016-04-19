import React, { Component, AppRegistry, Navigator, StyleSheet, Text, View, Platform } from 'react-native'
import {Scene, Router, TabBar, Modal, Schema, Actions, Reducer} from 'react-native-router-flux'
import { connect } from 'react-redux'

import NavigationDrawer from './common/NavigationDrawer'
import JournalView from '../containers/JournalView'
import NotesView from '../containers/NotesView'
import BloodSugarView from '../containers/BloodSugarView'
import BloodPressureView from '../containers/BloodPressureView'
import JournalForm from './JournalForm'

const Icon = require('react-native-vector-icons/Ionicons')

class TabIcon extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    console.log(this)
    return (
      <View style={iconStyles.container}>
        <Icon name='ios-clock-outline' size={28} style={iconStyles.icon} />
        <Text style={[iconStyles.iconText, {color: this.props.selected ? "red" :"black"}]}>{this.props.title}</Text>
      </View>
    );
  }
}

const iconStyles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
    alignItems:'center',
    alignSelf:'center',
    justifyContent: 'center',
  },
  icon: {
  },
  iconText: {
    fontSize: 10
  }
})

// <Text style={{color: this.props.selected ? 'red' :'black'}}>{this.props.title}</Text>

const reducerCreate = params=>{
    const defaultReducer = Reducer(params);
    return (state, action)=>{
        console.log("ACTION:", action);
        return defaultReducer(state, action);
    }
};

export default class Routes extends React.Component {

  render() {

    return (

      <Router createReducer={reducerCreate}>
        <Scene key="modal" component={Modal} >
          <Scene key="root">

            <Scene key="tabbar" hideNavBar={true} tabs={true} translucent={true} tabBarStyle={styles.tabBarStyle} >

              <Scene
                key="journal"
                title="Journal"
                iconName="ios-calendar-outline"
                icon={TabIcon.bind(this)}
                style={styles.journalScene}
              >
                <Scene key="journallist" initial={true} component={JournalView} title="Tab #1_1" />
                <Scene key="journalform" hideTabBar={true} component={JournalForm} title="Tab #1_2" />
              </Scene>

              <Scene
                key="bloodsugar"
                component={BloodSugarView}
                title="Blood sugar"
                iconName="thermometer"
                icon={TabIcon.bind(this)}
              />

              <Scene
                key="bloodpressure"
                component={BloodPressureView}
                icon={TabIcon.bind(this)}
                iconName="heart"
                title="Blood pressure" /
              >

                <Scene
                  key="notes"
                  component={NotesView}
                  icon={TabIcon.bind(this)}
                  iconName="clipboard"
                title="Notes"
              />

            </Scene>

          </Scene>
        </Scene>
      </Router>



    )
  }
}

export default connect()(Routes);

const styles = StyleSheet.create({
  tabBarStyle: {
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,.1)',
    backgroundColor: '#efeff2',
  },
  journalScene: {
    paddingTop: Platform.OS === 'ios' ? 62 : 0,
    paddingBottom: Platform.OS === 'ios' ? 50 : 0,
  },
  titleStyle: {
    color: 'white'
  },
  sceneStyle: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: 'white'
  }
})

      // <Router createReducer={reducerCreate} >
      //   <Scene key="modal" component={Modal} >
      //
      //     <Scene key="tabbar" tabs={true} >
      //       <Scene key="journal" component={JournalView} initial={true} title="JournalView" icon={TabIcon}>
      //         <Scene key="journalform" component={JournalForm} title="JournalForm"/>
      //       </Scene>
      //       <Scene key="bloodsugar" component={BloodSugarView} icon={TabIcon} title="Blood sugar" />
      //       <Scene key="bloodpressure" component={BloodPressureView} icon={TabIcon} title="Blood pressure" />
      //       <Scene key="notes" component={NotesView} icon={TabIcon} title="Notes"/>
      //     </Scene>
      //
      //
      //   </Scene>
      // </Router>
