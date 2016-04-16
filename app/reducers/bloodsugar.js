
import {
  BLOODSUGAR_SET_LIST,
  BLOODSUGAR_REQUEST,
  BLOODSUGAR_SUCCESS,
  BLOODSUGAR_FAILURE
} from '../actions/bloodsugar';

import Immutable from 'immutable'

const defaultState = Immutable.fromJS({
  list: [],
  listState: 'none',
  error: '',
})

// none, loading, ready, failed

export default function event(state = defaultState, action) {
  switch (action.type) {
    // case TESTING_TODO_DONE:
    //   return Object.assign({}, state, { todos: state.todos.filter(todo => todo !== action.payload)})
    // case TESTING_TOGGLE_STATE:
    //   const filter = state.filter === 'pending' ? 'done' : 'pending'
    //   return Object.assign({}, state, { filter: filter, todos: state.allTodos.filter(todo => todo.state === filter) })
    case BLOODSUGAR_SET_LIST:
      return state.set('list', Immutable.fromJS(action.payload))
      //  return Object.assign({}, state, { isLoading: true })
    case BLOODSUGAR_REQUEST:
      return state.set('listState', 'loading')
    case BLOODSUGAR_SUCCESS:
      return state.set('listState', 'ready');
    case BLOODSUGAR_FAILURE:
      return state.set('listState', 'failed');
    default:
      return state;
  }
}
