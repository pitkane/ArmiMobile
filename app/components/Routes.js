import React, { AppRegistry, Navigator, StyleSheet, Text, View } from 'react-native'
import {Scene, Router, TabBar, Modal, Schema, Actions, Reducer} from 'react-native-router-flux'
import { connect } from 'react-redux'

import JournalView from '../containers/JournalView'
import NotesView from '../containers/NotesView'
import BloodSugarView from '../containers/BloodSugarView'
import BloodPressureView from '../containers/BloodPressureView'
import JournalForm from './JournalForm'

const Icon = require('react-native-vector-icons/Ionicons')

class TabIcon extends React.Component {
  render(){
    return (
      <View style={{flex:1, flexDirection:'column', alignItems:'center', alignSelf:'center', justifyContent: 'space-around'}}>
        <Icon name='ios-calendar-outline' size={32} />
        <Text style={{color: this.props.selected ? "red" :"black"}}>{this.props.title}</Text>
      </View>
    );
  }
}
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

            <Scene key="tabbar" tabs={true}>

              <Scene key="journal" title="Tab #1" icon={TabIcon} >
                <Scene key="journallist" initial={true} component={JournalView} title="Tab #1_1" />
                <Scene key="journalform" onLeft={()=>alert("Left button!")} leftTitle="Left" hideTabBar={true} component={JournalView} title="Tab #1_2" />
              </Scene>

              <Scene key="bloodsugar" component={BloodSugarView} icon={TabIcon} title="Blood sugar" />
              <Scene key="bloodpressure" component={BloodPressureView} icon={TabIcon} title="Blood pressure" />
              <Scene key="notes" component={NotesView} icon={TabIcon} title="Notes"/>

            </Scene>

          </Scene>
        </Scene>
      </Router>



    )
  }
}

export default connect()(Routes);

const styles = StyleSheet.create({
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
