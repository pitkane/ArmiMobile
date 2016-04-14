import React, { StyleSheet, Text } from 'react-native';

const TestItem = React.createClass({

  render() {
    return (
      <Text style={styles.container}>
        Mo :)
      </Text>
    )
  }

})

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default TestItem
