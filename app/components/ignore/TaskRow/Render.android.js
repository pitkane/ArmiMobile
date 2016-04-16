import React from 'react-native'

const { View, Text, TouchableHighlight, Image, Animated } = React



export default function render(styles) {
  // console.log(this.props)
  const doneAnimation = new Animated.ValueXY()

  const localStyle = React.StyleSheet.create({
    doneButton: {
      borderRadius: 5,
      padding: 5,
    },
    row: {
      transform: doneAnimation.getTranslateTransform()
    }
  })

  function animatedPress() {
    Animated.spring(doneAnimation, {
      tension: 2,
      friction: 3,
      toValue: {
        x: -500,
        y: 0,
      }
    }).start()

    setTimeout(() => {
      this.onDonePress()
    }, 800)

  }

  return (
    <Animated.View style={[styles.container, localStyle.row]}>
      <Text style={styles.label}>and: {this.props.todo.task}</Text>

      <TouchableHighlight
        underlayColor="#ddd"
        onPress={animatedPress.bind(this)}
        style={localStyle.doneButton}
      >
        <Text>Done</Text>
      </TouchableHighlight>

    </Animated.View>
    )
}
