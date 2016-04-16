import React from 'react-native'
import Swipeout from 'react-native-swipeout'

const { View, Text, TouchableHighlight } = React

const localStyle = React.StyleSheet.create({
  row: {
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
  },
  container: {
    marginBottom: 20,
  }
})

export default function render(baseStyle) {
  const swipeoutButtons = [
    {
      text: 'Remove',
      backgroundColor: '#05A5D1',
      underlayColor: '#273539',
      onPress: this.onDonePress.bind(this)
    }
  ]
  // console.log(this.props)
  return (
    <View style={localStyle.container}>
      <Swipeout
        backgroundColor='#fff'
        right={swipeoutButtons}
      >
        <View style={[baseStyle.container, localStyle.row]}>
          <Text style={baseStyle.label}>ios: {this.props.todo.task}</Text>

          {/* <TouchableHighlight
            onPress={this.onDonePress.bind(this)}
            style={baseStyle.doneButton}
            >
            <Text>Done</Text>
          </TouchableHighlight> */}

        </View>
      </Swipeout>
    </View>
  )
}
