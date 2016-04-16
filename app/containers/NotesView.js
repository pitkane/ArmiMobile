import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

class NotesView extends Component {


  render() {
    return (
      <View style={styles.container}>
        <Text>
          List notes :) 
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

export default NotesView;
