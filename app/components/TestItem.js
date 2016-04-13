import React, { StyleSheet, Text } from 'react-native';



const styles = StyleSheet.create({
  test: {
    fontSize: 18,
    color: '#000FFF'
  }
})


const TestItem = React.createClass({

  render() {

    return (
      <Text style={styles.test}>
        Armi Mobile :)
      </Text>
    )
  }
})

export default TestItem
