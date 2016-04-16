import Parse from 'parse/react-native'

export const BLOODSUGAR_SET_LIST = 'BLOODSUGAR_SET_LIST'
export const BLOODSUGAR_REQUEST = 'BLOODSUGAR_REQUEST'
export const BLOODSUGAR_SUCCESS = 'BLOODSUGAR_SUCCESS'
export const BLOODSUGAR_FAILURE = 'BLOODSUGAR_FAILURE'

export const fetchBloodSugarList = () => {
  return (dispatch) => {
    dispatch({ type: BLOODSUGAR_REQUEST })

    const BloodSugarObject = Parse.Object.extend('BloodSugar')
    const query = new Parse.Query(BloodSugarObject)

    query.find({
      success: (result) => {
        dispatch({ type: BLOODSUGAR_SET_LIST, payload: result })
        dispatch({ type: BLOODSUGAR_SUCCESS })
      },
      error: (error) => {
        dispatch({ type: BLOODSUGAR_FAILURE, payload: error })
      }
    })
  }
}
