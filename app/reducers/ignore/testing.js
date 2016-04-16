
import {
  TESTING_ADD_TODO,
  TESTING_TODO_DONE,
  TESTING_TOGGLE_STATE,
  TESTING_REQUEST,
  TESTING_SUCCESS,
  TESTING_FAILURE
} from '../actions/testing';

const defaultTodos =  [
    {
      task: 'Init redux',
      state: 'pending'
    },
    {
      task: 'Jroma',
      state: 'done'
    }
  ]

const defaultState = {
  todos: defaultTodos,
  allTodos: defaultTodos,
  status: '',
  filter: 'pending'
}
// Noooooot working properly, but no need for it :)

export default function event(state = defaultState, action) {
  switch (action.type) {
    case TESTING_ADD_TODO:
      const allTodos = state.todos.concat([{ task: action.payload, state: 'pending' }])
      return Object.assign({}, state, {
        allTodos: allTodos,
        todos: allTodos.filter(todo => todo.state === state.filter)
      })
    case TESTING_TODO_DONE:
      return Object.assign({}, state, { todos: state.todos.filter(todo => todo !== action.payload)})
    case TESTING_TOGGLE_STATE:
      const filter = state.filter === 'pending' ? 'done' : 'pending'
      return Object.assign({}, state, { filter: filter, todos: state.allTodos.filter(todo => todo.state === filter) })
    case TESTING_REQUEST:
      return state.set('status', 'loading');
    case TESTING_SUCCESS:
      return state.set('status', 'ready');
    case TESTING_FAILURE:
      return state.set('status', 'failed');
    default:
      return state;
  }
}
