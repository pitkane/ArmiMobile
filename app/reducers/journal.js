
import {
  JOURNAL_SET_LIST,
  JOURNAL_REQUEST,
  JOURNAL_SUCCESS,
  JOURNAL_FAILURE
} from '../actions/journal';

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
    case JOURNAL_SET_LIST:
      return state.set('list', Immutable.fromJS(action.payload))
      //  return Object.assign({}, state, { isLoading: true })
    case JOURNAL_REQUEST:
      return state.set('listState', 'loading')
    case JOURNAL_SUCCESS:
      return state.set('listState', 'ready');
    case JOURNAL_FAILURE:
      return state.set('listState', 'failed');
    default:
      return state;
  }
}
