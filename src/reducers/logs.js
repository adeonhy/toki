const log = (state, action) => {
  switch (action.type) {
    case 'ADD_TIME_LOG':
      return { 
        id: action.id,
        log: action.log
      }
    default:
      return state
  }
}

const logs = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TIME_LOG':
      return [
        ...state,
        log(undefined, action)
      ]
    default:
      return state
  }
}

export default logs
