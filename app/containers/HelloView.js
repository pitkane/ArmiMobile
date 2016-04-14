import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Moment from 'moment'
require('moment/locale/fi')

class HelloView extends Component {


  render() {
    return (
      <View style={styles.container}>
        <Text>
          HelloView :) Add logout button
        </Text>
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

export default HelloView;
