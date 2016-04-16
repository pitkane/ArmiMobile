import { CHANGE_TAB } from '../actions/navigation';

const initialState = { currentTab: 'JOURNAL'}

export default function navigation(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TAB:
      return Object.assign({}, state, { currentTab: action.payload })
    default:
      return state;
  }
}
