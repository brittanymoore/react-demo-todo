import tasksReducer from './tasks'
import * as types from '../actions/action-types'

describe('tasks reducer', () => {
  it('should return the initial state', () => {
    expect(tasksReducer(undefined, {})).toEqual([])
  })

  it('should handle GET_TASKS_SUCCESS', () => {
    expect(
      tasksReducer(undefined, {
        type: types.GET_TASKS_SUCCESS,
        tasks: 'tasks'
      })
    ).toEqual('tasks')
  })

  it('should handle ADD_TASK_SUCCESS with no items in state', () => {
    const initialState = []
    expect(
      tasksReducer(initialState, {
        type: types.ADD_TASK_SUCCESS,
        task: { id: 'new-task' }
      })
    ).toEqual([{ id: 'new-task' }])
  })

  it('should handle ADD_TASK_SUCCESS with items in state', () => {
    const initialState = [{ id: 'first-task' }, { id: 'second-task' }]
    expect(
      tasksReducer(initialState, {
        type: types.ADD_TASK_SUCCESS,
        task: { id: 'third-task' }
      })
    ).toEqual([
      { id: 'first-task' },
      { id: 'second-task' },
      { id: 'third-task' }
    ])
  })

  it('should handle UPDATE_TASK_SUCCESS', () => {
    const initialState = [
      {
        id: 'first-task',
        name: 'abc'
      },
      {
        id: 'second-task',
        name: 'abc'
      }
    ]
    expect(
      tasksReducer(initialState, {
        type: types.UPDATE_TASK_SUCCESS,
        task: {
          id: 'first-task',
          name: 'def'
        }
      })
    ).toEqual([
      {
        id: 'first-task',
        name: 'def'
      },
      {
        id: 'second-task',
        name: 'abc'
      }
    ])
  })
})
