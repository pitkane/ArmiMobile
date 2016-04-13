import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import TestItem from '../components/TestItem'

class MainView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          MainView for ArmiMobile :)
        </Text>
        <TestItem />
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

export default MainView;
