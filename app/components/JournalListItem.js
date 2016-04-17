import React from 'react-native'

const {
  Text,
  View,
  TouchableHighlight
} = React
import Swipeout from 'react-native-swipeout'
// import Render from './Render'

class JournalListItem extends React.Component {

  constructor(props, context) {
    super(props, context)
  }

  render() {
    // console.log(this.props)
    const swipeoutButtons = [
      {
        text: 'Remove',
        // backgroundColor: '#05A5D1',
        // underlayColor: '#273539',
        onPress: () => { this.props.onRemovePress(this.props.item) }
      }
    ]
    // console.log(this.props)
    return (
      <View style={styles.container}>
        <Swipeout
          scroll={event => { this.props.allowScroll(event)}}
          backgroundColor='#fff'
          right={swipeoutButtons}
        >
          <View style={styles.textContainer}>
            <Text>{this.props.item.get('body')}</Text>

          </View>
        </Swipeout>
      </View>
    )
  }

}


const styles = React.StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E7E7E7',
    // padding: 20,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
  },
  textContainer: {
    padding: 20,
  }
})

export default JournalListItem
