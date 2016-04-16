import React, {
  Component,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native'


class BloodSugarList extends Component {

  constructor(props, context) {
    super(props, context)
  }

  onAddPress() {
    // dispatch action and act accordingly of result
    // this.props.onAdd(this.state.value1)
  }

  doNotTryThisAtHome(list) {
    console.log(list)
    return list.map(item => {
      return `${item.get('value')} - `
    })
  }


  render() {
    console.log(this.props)
    return (
      <View style={styles.container}>
        <Text>
          List of blood sugar values
          {this.doNotTryThisAtHome(this.props.list)}

        </Text>

        <TouchableHighlight
          onPress={this.props.onAddStarted}
          style={[styles.button, styles.cancelButton]}
        >
          <Text style={styles.buttonText}>
            Add
          </Text>
        </TouchableHighlight>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'flex-start',
    paddingTop: 30,
    backgroundColor: '#F7F7F7',
  },
  input: {
    borderWidth: 1,
    borderColor: '#D7D7D7',
    height: 50,
    marginLeft: 10,
    marginRight: 10,
    padding: 15,
    borderRadius: 3,
  },
  button: {
    height: 45,
    alignSelf: 'stretch',
    backgroundColor: '#05A5D1',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FAFAFA',
    fontSize: 18,
    fontWeight: '600'
  },
  cancelButton: {
    backgroundColor: '#666'
  }
});

export default BloodSugarList;
