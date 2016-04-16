import React, {
  Component,
  View,
  Text,
  StyleSheet,
  TextInput
  } from 'react-native'
import Parse from 'parse/react-native'
import Button from '../common/Button'

class SignIn extends Component {

  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      errorMessage: ''
    }
  }

  onPress() {
    this.setState({ errorMessage: '' })
    Parse.User.logIn(this.state.username, this.state.password, {
      success: (user) => {
        this.props.navigator.immediatelyResetRouteStack([{name: 'helloview'}])
      },
      error: (user, error) => {
        this.setState({ errorMessage: error.message })
      }
    })

    return
  }

  onSignupPress() {
    // navigate to signup :)
    // this.props.navigator
    this.props.navigator.push({name: 'signup'})
  }

  render() {
    console.log(this.state)
    return (
      <View style={styles.container}>
        <Text>Sign In</Text>

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

        <Text style={styles.label}>{this.state.errorMessage}</Text>

        <Button text="Sign in" onPress={this.onPress.bind(this)}/>

        <Button text="Create an account..." onPress={this.onSignupPress.bind(this)} />

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

export default SignIn
