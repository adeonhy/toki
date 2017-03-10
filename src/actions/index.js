let nextTodoId = 0
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})

let nextTimeLog = 0
export const addTimeLog = (log) => {
  return ({
    type: 'ADD_TIME_LOG',
    id: nextTimeLog++,
    log
  })
}

export const setProjectName = (name) => {
  return ({
    type: 'SET_PROJECT_NAME',
    name
  })
}

export const setStartTime = (time) => {
  return ({
    type: 'SET_START_TIME',
    time
  })
}

export const setEndTime = (time) => {
  return ({
    type: 'SET_END_TIME',
    time
  })
}

export const setDescription = (text) => {
  return ({
    type: 'SET_DESCRIPTION',
    text
  })
}
