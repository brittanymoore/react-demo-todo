import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import TasksApi from '../../api/tasks'
import reducers from '../reducers'

export default function configureStore() {
  return createStore(
    reducers,
    applyMiddleware(thunk.withExtraArgument(new TasksApi()))
  )
}
