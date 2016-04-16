import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Moment from 'moment'
require('moment/locale/fi')

class TestContainer extends Component {


  render() {
    return (
      <View style={styles.container}>
        <Text>
          TestContainer for ArmiMobile :)
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

export default TestContainer;
