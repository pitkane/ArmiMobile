import React, {
  Component,
  View,
  Text,
  StyleSheet,
  TextInput
  } from 'react-native'
import Parse from 'parse/react-native'
import Button from '../common/Button'

class SignUp extends Component {

  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      passwordConfirmation: '',
      errorMessage: ''
    }
  }

  onSignUpPress() {
    if (this.state.password !== this.state.passwordConfirmation) {
      return this.setState({ errorMessage: 'Your passwords do not match'})
    }

    let user = new Parse.User()
    user.set('username', this.state.username)
    user.set('password', this.state.password)

    user.signUp(null, {
      success: (user) => { this.props.navigator.immediatelyResetRouteStack([{name: 'helloview'}]) },
      error: (user, error) => { console.log(user, error) }
    })
    return
  }

  onSignInPress() {
    this.props.navigator.pop()
  }

  render() {
    console.log(this.state)
    return (
      <View style={styles.container}>
        <Text>Sign Up</Text>

        <Text style={styles.label}>Username:</Text>
        <TextInput
          style={styles.input}
          clearButtonMode="while-editing"
          value={this.state.username}
          onChangeText={(text) => this.setState({ username: text })}
        />

        <Text style={styles.label}>Password:</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          onChangeText={(text) => this.setState({ password: text })}
        />

        <Text style={styles.label}>Password again:</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          onChangeText={(text) => this.setState({ passwordConfirmation: text })}
        />

        <Text style={styles.label}>{this.state.errorMessage}</Text>

        <Button text="Sign Up" onPress={this.onSignUpPress.bind(this)}/>

        <Button text="I have an account..." onPress={this.onSignInPress.bind(this)} />

      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    padding: 4,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    width: 200,
    alignSelf: 'center'
  },
  label: {
    fontSize: 18
  }
})

export default SignUp
