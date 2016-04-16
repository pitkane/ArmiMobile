import Parse from 'parse/react-native'

export const JOURNAL_SET_LIST = 'JOURNAL_SET_LIST'
export const JOURNAL_REQUEST = 'JOURNAL_REQUEST'
export const JOURNAL_SUCCESS = 'JOURNAL_SUCCESS'
export const JOURNAL_FAILURE = 'JOURNAL_FAILURE'

export const fetchJournalList = () => {
  return (dispatch) => {
    dispatch({ type: JOURNAL_REQUEST })

    // make the Parse call
    const JournalObject = Parse.Object.extend('Journal')
    const query = new Parse.Query(JournalObject)

    query.descending('creationDate').find({
      success: (result) => {
        // console.log(result)
        dispatch({ type: JOURNAL_SET_LIST, payload: result })
        dispatch({ type: JOURNAL_SUCCESS })
      },
      error: (error) => {
        dispatch({ type: JOURNAL_FAILURE, payload: error })
      }
    })

  }

}
