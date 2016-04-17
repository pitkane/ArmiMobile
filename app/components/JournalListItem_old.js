import React, {
  Component,
  StyleSheet,
  Text,
  TextInput,
  Dimensions,
  TouchableHighlight,
  View
} from 'react-native'

class JournalListItem extends Component {

  constructor(props, context) {
    super(props, context)
  }


  render() {
    return (
      <View style={styles.itemWrapper}>
        <View style={styles.itemContent}>

          <Text>{this.props.item.get('body')}</Text>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
itemWrapper: {
  width: Dimensions.get('window').width,
  backgroundColor: '#f2f2f2',
  paddingBottom: 10,
  paddingTop:5,
},
itemContent:{
  flex: 1,
  elevation: 2,
  shadowColor: '#000000',
  shadowOpacity: 0.15,
  shadowRadius: 1,
  shadowOffset: {
    height: 2,
    width: 0
  },
  backgroundColor: '#fff'
}
});

export default JournalListItem;
