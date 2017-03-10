const currentTask = (state = {}, action) => {
  switch (action.type) {
    case 'SET_PROJECT_NAME':
      return Object.assign({}, state, {projectName: action.name})
    case 'SET_START_TIME':
      return Object.assign({}, state, {startTime: action.time})
    case 'SET_END_TIME':
      return Object.assign({}, state, {endTime: action.time})
    case 'SET_DESCRIPTION':
      return Object.assign({}, state, {description: action.text})
    default:
      return state
  }
}

export default currentTask
