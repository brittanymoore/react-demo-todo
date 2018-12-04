/* eslint-disable no-case-declarations */

import * as types from '../actions/action-types'
import { initialState } from './initial-state'

export default function tasksReducer(state = initialState.tasks, action) {
  switch (action.type) {
    case types.GET_TASKS_SUCCESS:
      return action.tasks
    case types.ADD_TASK_SUCCESS:
      return [...state, Object.assign({}, action.task)]
    case types.UPDATE_TASK_SUCCESS:
      const newState = state.slice(0)
      const index = newState.findIndex(task => task.id === action.task.id)
      newState.splice(index, 1, Object.assign({}, action.task))
      return newState
    default:
      return state
  }
}
