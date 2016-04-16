import React, {
  Component,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native'

class TaskForm extends Component {

  constructor(props, context) {
    super(props, context)

    this.state = {
      task: ''
    }
  }

  onAddPress() {
    this.props.onAdd(this.state.task)
  }

  render() {
    console.log(this.state)
    return (
      <View style={styles.container}>

        <TextInput
          onChangeText={(text) => this.setState({ task: text }) }
          style={styles.input}
        />

        <TouchableHighlight
          onPress={this.onAddPress.bind(this)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>
            Add
          </Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={this.props.onCancel}
          style={[styles.button, styles.cancelButton]}
        >
          <Text style={styles.buttonText}>
            Cancel
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
    paddingTop: 150,
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

export default TaskForm;
