import React, {
  Component,
  StyleSheet,
  Text,
  TextInput,
  Dimensions,
  Platform,
  TouchableHighlight,
  View
} from 'react-native'

class ActionButton extends Component {

  constructor(props, context) {
    super(props, context)
  }

  onPress


  render() {

    return (
      <TouchableHighlight onPress={this.props.onPress} style={styles.button}>
        <View style={[styles.content]}>
          <View>
            {this.props.children}
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}

const {height, width} = Dimensions.get('window')

const styles = StyleSheet.create({
  button: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 55 : 20,
    right: width/2-28,
    backgroundColor: '#05A5D1',
    width: 56,
    height: 56,
    borderRadius: 28,
    elevation: 2,
    shadowColor: '#000000',
    shadowOpacity: 0.15,
    shadowRadius: 1,
    shadowOffset: {
      height: 2,
      width: 0
    },
  },
  content: {
    bottom: 0,
    right: 0
  }
});

export default ActionButton;
