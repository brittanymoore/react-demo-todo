import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './tasks'
import * as types from './action-types'

describe('async actions', () => {
  let mockApi, mockStore
  beforeAll(() => {
    mockApi = td.object(['getTasks', 'addTask', 'updateTask'])
    mockStore = configureMockStore([thunk.withExtraArgument(mockApi)])({})
  })

  afterEach(() => {
    mockStore.clearActions()
  })

  it('creates GET_TASKS_SUCCESS after getting tasks', () => {
    td.when(mockApi.getTasks()).thenResolve('tasks')

    return mockStore.dispatch(actions.getTasks()).then(() => {
      expect(mockStore.getActions()).toEqual([
        { tasks: 'tasks', type: types.GET_TASKS_SUCCESS }
      ])
    })
  })

  it('creates ADD_TASK_SUCCESS after adding a task', () => {
    td.when(mockApi.addTask('task')).thenResolve('added')

    return mockStore.dispatch(actions.addTask('task')).then(() => {
      expect(mockStore.getActions()).toEqual([
        { task: 'added', type: types.ADD_TASK_SUCCESS }
      ])
    })
  })

  it('creates UPDATE_TASK_SUCCESS after updating a task', () => {
    td.when(mockApi.updateTask('task')).thenResolve('updated')

    return mockStore.dispatch(actions.updateTask('task')).then(() => {
      expect(mockStore.getActions()).toEqual([
        { task: 'updated', type: types.UPDATE_TASK_SUCCESS }
      ])
    })
  })
})
