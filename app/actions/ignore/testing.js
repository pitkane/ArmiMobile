

export const TESTING_ADD_TODO = 'TESTING_ADD_TODO'
export const TESTING_TODO_DONE = 'TESTING_TODO_DONE'
export const TESTING_TOGGLE_STATE = 'TESTING_TOGGLE_STATE'
export const TESTING_REQUEST = 'TESTING_REQUEST'
export const TESTING_SUCCESS = 'TESTING_SUCCESS'
export const TESTING_FAILURE = 'TESTING_FAILURE'

export const fetchTesting = () => {
  return (dispatch) => {
    dispatch({ type: TESTING_REQUEST });


    // api.fetchModels('markers')
    //   .then(events => {
    //     dispatch({
    //       type: SET_MARKER_LIST,
    //       payload: events
    //     });
    //     dispatch({ type: GET_MARKER_LIST_SUCCESS });
    //   })
    //   .catch(error => dispatch({ type: GET_MARKER_LIST_FAILURE, error: true, payload: error }));
  }
};
