import React from 'react-native'
import Collapsible from 'react-native-collapsible'
import Accordion from 'react-native-collapsible/Accordion'

const {
  Text,
  View,
  TouchableHighlight
} = React
// import Swipeout from 'react-native-swipeout'
// import Render from './Render'

var SECTIONS = [
  {
    title: 'First',
    content: 'Lorem ipsum...',
  },
  {
    title: 'Second',
    content: 'Lorem ipsum...',
  }
];


class JournalListItem extends React.Component {

  constructor(props, context) {
    super(props, context)
  }

  _pressRow(item) {
    // go to new scene, for edit etc :)
  }

  // body
  _renderHeader(section) {
    return (
      <View style={styles.textContainer}>
        <Text>{section.title}</Text>
      </View>
    );
  }

  // edit buttons
  _renderContent(section) {
    return (
      <View>
        <TouchableHighlight onPress={() => this.props.onRemovePress(this.props.item)}>
          <Text>Remove</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => console.log('edit')}>
          <Text>Edit</Text>
        </TouchableHighlight>
      </View>
    );
  }

  render() {

    return (
      <View style={styles.container}>

        <Accordion
          sections={[{ title: this.props.item.get('body'), content: 'Remove' }]}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent.bind(this)}
        />
        {/* <View style={styles.textContainer}>
          <Text>{this.props.item.get('body')}</Text>
        </View> */}

        {/* <TouchableHighlight onPress={() => this._pressRow(this.props.item)}>
          <View>
            <View style={styles.textContainer}>
              <Text style={styles.text}>
                {this.props.item.get('body')}
              </Text>
            </View>
          </View>
        </TouchableHighlight> */}

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










// console.log(this.props)
// const swipeoutButtons = [
//   {
//     text: 'Remove',
//     // backgroundColor: '#05A5D1',
//     // underlayColor: '#273539',
//     onPress: () => { this.props.onRemovePress(this.props.item) }
//   }
// ]
// console.log(this.props)

/////
// https://facebook.github.io/react-native/docs/listview.html
////
//
// <Swipeout
//   scroll={event => { this.props.allowScroll(event)}}
//   backgroundColor='#fff'
//   right={swipeoutButtons}
// >
//   <View style={styles.textContainer}>
//     <Text>{this.props.item.get('body')}</Text>
//
//   </View>
// </Swipeout>
// scroll={event => { this.props.allowScroll(event)}}
