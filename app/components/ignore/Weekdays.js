import React, { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  test: {
    fontSize: 18,
    color: '#000FFF'
  }
})

const Weekdays = React.createClass({

  style() {
    return {
      color: this.color(),
      fontWeight: this.fontWeight(),
      fontSize: this.fontSize(),
      lineHeight: this.lineHeight()
    }
  },

  color() {
    let opacity = 1.1 / (this.props.daysUntil + 0.1)
    return 'rgba(0, 0, 0, '+ opacity + ')'
  },

  fontWeight() {
    let weight = 7 - this.props.daysUntil
    return (weight * 100).toString()
  },

  fontSize() {
    return 60 - 6 * this.props.daysUntil
  },

  lineHeight() {
    return 70- 4 * this.props.daysUntil
  },

  render() {

    console.log(this.props)
    return (
      <Text style={this.style()}>
        {this.props.day}
      </Text>
    )
  }

})

export default Weekdays
