import React, {
  Component,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native'
import { connect } from 'react-redux'
import { Actions as RouterActions } from "react-native-router-flux";

class JournalForm extends Component {

  constructor(props, context) {
    super(props, context)

    this.state = {
      text: ''
    }
  }

  _onAddPress() {
    this.props.onAdd(this.state.text)
  }

  _onCancelPress() {
    RouterActions.pop()
    // this.props.navigator.popToTop()
  }

  render() {
    // console.log(this.props)
    return (
      <View style={styles.container}>

        <TextInput
          onChangeText={(text) => this.setState({ text: text }) }
          style={styles.input}
        />

        <TouchableHighlight
          onPress={this._onAddPress.bind(this)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>
            Add
          </Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={this._onCancelPress.bind(this)}
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

export default connect()(JournalForm);
