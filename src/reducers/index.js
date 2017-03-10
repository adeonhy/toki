import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import logs from './logs'
import currentTask from './currentTask'

const tokiApp = combineReducers({
  todos,
  visibilityFilter,
  logs,
  currentTask
})

export default tokiApp
