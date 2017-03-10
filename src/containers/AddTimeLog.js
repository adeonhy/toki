import { connect } from 'react-redux'
import { addTimeLog, setProjectName, setStartTime, setEndTime, setDescription } from '../actions'
import MainToolBar from '../components/MainToolBar'

const elapsedTime = (startTime, endTime) => {
  return formatTime(endTime - startTime)
}

const formatTime = (unixtime) => {
  const t = unixtime % (1000*60*60*24)
  const hours = ("0" + Math.floor(t / (1000*60*60))).substr(-2)
  const minutes = ("0" + Math.floor((t / (1000*60))) % 60).substr(-2)
  const seconds = ("0" + Math.floor((t / 1000) % 60)).substr(-2)
  return `${hours}:${minutes}:${seconds}`
}

const onLogAdd = (dispatch, log) => {
  dispatch(addTimeLog({
    projectName: log.projectName,
    startTime: formatTime(log.startTime),
    endTime: formatTime(log.endTime),
    elapsedTime: elapsedTime(log.startTime, log.endTime),
    description: log.description
  }))
}

const mapDispatchToProps = dispatch => {
  return {
    onLogAdd: log => onLogAdd(dispatch, log),
    onSetProjectName: name => dispatch(setProjectName(name)),
    onSetStartTime: time => dispatch(setStartTime(time)),
    onSetEndTime: time => dispatch(setEndTime(time)),
    onSetDescription: text => dispatch(setDescription(text)),
  }
}

const mapStateToProps = state => ({
  projectName: state.currentTask.projectName,
  startTime: state.currentTask.startTime,
  endTime: state.currentTask.endTime,
  description: state.currentTask.description
})

const AddTimeLog = connect(mapStateToProps, mapDispatchToProps)(MainToolBar)

export default AddTimeLog
