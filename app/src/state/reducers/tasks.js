import * as types from '../actions/action-types'
import initialState from './initial-state'

function addTaskToState(state, newTask) {
  return [...state, Object.assign({}, newTask)]
}

function updateTaskInState(state, updatedTask) {
  const newState = state.slice(0)
  const index = newState.findIndex(task => task.id === updatedTask.id)
  newState.splice(index, 1, Object.assign({}, updatedTask))
  return newState
}

export default function tasksReducer(state = initialState.tasks, action) {
  switch (action.type) {
    case types.GET_TASKS_SUCCESS:
      return action.tasks
    case types.ADD_TASK_SUCCESS:
      return addTaskToState(state, action.task)
    case types.UPDATE_TASK_SUCCESS:
      return updateTaskInState(state, action.task)
    default:
      return state
  }
}
