import React, {
  Component,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import FormatTime from 'minutes-seconds-milliseconds'

class StopWatch extends Component {

  constructor(props) {
    super(props)

    this.state = {
      running: false,
      timeElapsed: null,
      startTime: null,
      laps: []
    }
  }

  startStopButton() {
    let style = this.state.running ? styles.stopButton : styles.startButton
    
    return (
      <TouchableHighlight
        underlayColor="gray"
        onPress={this.handleStartPress.bind(this)}
        style={[styles.button, style]}
      >
        <Text>
          {this.state.running ? 'Stop' : 'Start'}
        </Text>
      </TouchableHighlight>
    )
  }

  lapButton() {
    // let style = this.state.running ? styles.stopButton : styles.startButton

    return (
      <TouchableHighlight
        underlayColor="gray"
        onPress={this.handleLapPress.bind(this)}
        style={[styles.button]}
      >
        <Text>
          Lap
        </Text>
      </TouchableHighlight>
    )
  }

  border(color) {
    return {
      borderColor: color,
      borderWidth: 2
    }
  }

  handleLapPress() {
    let lap = this.state.timeElapsed

    this.setState({
      laps: this.state.laps.concat([lap]),
      startTime: new Date()
    })
  }

  handleStartPress() {
    if(this.state.running === true) {
      clearInterval(this.interval)
      this.setState({ running: false })
      return
    }

    this.setState({startTime: new Date()})

    this.interval = setInterval(() => {
      this.setState({
        running: true,
        timeElapsed: new Date - this.state.startTime
      })
    }, 50)
  }

  laps() {
    return this.state.laps.map((time, index) => {
      return (
        <View key={index} style={styles.lap}>
          <Text style={styles.lapText}>
            Lap #{index + 1}
          </Text>
          <Text style={styles.lapText}>
            {FormatTime(time)}
          </Text>
        </View>
      )
    })
  }


  render() {

    return (
      <View style={styles.container}>
        <View style={[styles.header]}>
          <View style={[styles.timerWrapper]}>
            <Text style={styles.timer}>
              {FormatTime(this.state.timeElapsed)}
            </Text>
          </View>

          <View style={[styles.buttonWrapper]}>
            {this.startStopButton()}
            {this.lapButton()}
          </View>
        </View>

        <View style={[styles.footer]}>
          {this.laps()}
        </View>
      </View>

    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  header: {
    flex: 1
  },
  footer: {
    flex: 1
  },
  timerWrapper: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonWrapper: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  timer: {
    fontSize: 60
  },
  button: {
    borderWidth: 2,
    height: 80,
    width: 80,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  startButton: {
    borderColor: '#00CC00'
  },
  stopButton: {
    borderColor: '#CC0000'
  },
  lapButton: {
  },
  lap: {
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  lapText: {
    fontSize: 30
  }
});

export default StopWatch;
