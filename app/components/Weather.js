import React, {
  Component,
  StyleSheet,
  Text,
  TouchableHighlight,
  MapView,
  View
} from 'react-native';

import Api from '../utils/api'

class Weather extends Component {

  constructor(props) {
    super(props)

    this.state = {
      pin: {
        latitude: 0,
        longitude: 0
      },
      cityData: {}
    }
  }

  onRegionChangeComplete(region) {
    this.setState({
      pin: {
        longitude: region.longitude,
        latitude: region.latitude
      }
    })
    // console.log(region)

    Api.fetchData(region.latitude, region.longitude)
      .then((data) => {
        this.setState({ cityData: data })
        // console.log(data)
      })

  }

  render() {

    return (
      <View style={styles.container}>
        <MapView
          annotations={[this.state.pin]}
          style={styles.map}
          onRegionChangeComplete={this.onRegionChangeComplete.bind(this)}
        >

        </MapView>
        <View style={styles.bottom}>
          <Text>
            {this.state.cityData.city}
          </Text>
          <Text>
            {this.state.cityData.temperature}
          </Text>
          <Text>
            {this.state.cityData.description}
          </Text>
        </View>
      </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    flex: 3,
    marginTop: 20
  },
  bottom: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});

export default Weather;
