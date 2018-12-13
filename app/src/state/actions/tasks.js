import * as types from './action-types'

export function getTasks() {
  return function(dispatch, getState, api) {
    return api
      .getTasks()
      .then(tasks => {
        dispatch(getTasksSuccess(tasks))
      })
      .catch(error => {
        throw error
      })
  }
}

function getTasksSuccess(tasks) {
  return { type: types.GET_TASKS_SUCCESS, tasks }
}

export function addTask(task) {
  return function(dispatch, getState, api) {
    return api
      .addTask(task)
      .then(addedTask => {
        dispatch(addTaskSuccess(addedTask))
      })
      .catch(error => {
        throw error
      })
  }
}

function addTaskSuccess(task) {
  return { type: types.ADD_TASK_SUCCESS, task }
}

export function updateTask(task) {
  return function(dispatch, getState, api) {
    return api
      .updateTask(task)
      .then(addedTask => {
        dispatch(updateTaskSuccess(addedTask))
      })
      .catch(error => {
        throw error
      })
  }
}

function updateTaskSuccess(task) {
  return { type: types.UPDATE_TASK_SUCCESS, task }
}
