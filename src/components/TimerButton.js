import React, {Component} from 'react';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import PlayArrow from 'material-ui/svg-icons/av/play-arrow';
import Stop from 'material-ui/svg-icons/av/stop';

export default class TimerButton extends Component {
  state = {
    nowRecording: false,
    startTime: undefined,
  }

  handleClick = (event, index, value) => {
    if (this.state.nowRecording) {
      clearInterval(this.interval);
      const startTime = this.state.startTime
      const endTime = Date.now()
      this.props.onTimerEnd(endTime)
      this.props.onLogAddCallback({
        startTime: this.formatTime(startTime),
        endTime: this.formatTime(endTime),
        elapsedTime: this.formatTime(endTime - startTime)
      })
      this.setState({
        nowRecording: false,
        startTime: undefined
      })
    } else {
      const startTime = Date.now()
      this.interval = setInterval(this.tick, 1000);
      this.props.onTimerStart(startTime)
      this.setState({
        nowRecording: true,
        startTime 
      })
    }
  }

  elapsedTime = () => {
    if (this.state.startTime) {
      const elapsedMS = Date.now() - this.state.startTime
      return this.formatTime(elapsedMS)
    } else {
      return "00:00:00"
    }
  }

  formatTime = (unixtime) => {
    const t = unixtime % (1000*60*60*24)
    const hours = ("0" + Math.floor(t / (1000*60*60))).substr(-2)
    const minutes = ("0" + Math.floor((t / (1000*60))) % 60).substr(-2)
    const seconds = ("0" + Math.floor((t / 1000) % 60)).substr(-2)
    return `${hours}:${minutes}:${seconds}`
  }

  tick = () => {
    this.forceUpdate();
  }

  render() {
    return (
      <FlatButton
      label={this.elapsedTime()}
      labelPosition="before"
      primary={true}
      icon={this.state.nowRecording ? <Stop /> : <PlayArrow />}
      onClick={this.handleClick} />
    )
  }
}

