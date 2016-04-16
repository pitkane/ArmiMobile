import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Moment from 'moment'
require('moment/locale/fi')

import TestItem from '../components/TestItem'

var TESTARRAY = ['one', 'two', 'three', 'four', 'five', 'six', 'seven']

class Weekdays extends Component {

  days() {


    const dayItems = []

    for(let i = 0; i < 7; i++) {
      var day = Moment().add(i, 'days').format('dddd')
      dayItems.push(
        <TestItem key={i} day={day} daysUntil={i} />
      )
    }
    return dayItems
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Weekdays for ArmiMobile :)
        </Text>

        {this.days()}

      </View>
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

export default Weekdays;
