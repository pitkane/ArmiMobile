import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

class BloodSugarView extends Component {


  render() {
    return (
      <View style={styles.container}>
        <Text>
          List Blood Sugar values :) 
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

export default BloodSugarView;
