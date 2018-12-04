import * as types from './action-types'
import { TasksApi } from '../../api/tasks'

const api = new TasksApi()

export function getTasks() {
  return function(dispatch) {
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

export function getTasksSuccess(tasks) {
  return { type: types.GET_TASKS_SUCCESS, tasks }
}

export function addTask(task) {
  return function(dispatch) {
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

export function addTaskSuccess(task) {
  return { type: types.ADD_TASK_SUCCESS, task }
}

export function updateTask(task) {
  return function(dispatch) {
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

export function updateTaskSuccess(task) {
  return { type: types.UPDATE_TASK_SUCCESS, task }
}
