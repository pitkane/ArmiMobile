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

    return query.descending('creationDate').find({
      success: (result) => {
      //  return setTimeout(() => {
        dispatch({ type: JOURNAL_SET_LIST, payload: result })
        dispatch({ type: JOURNAL_SUCCESS })
      //  }, 2000)

      },
      error: (error) => {
        dispatch({ type: JOURNAL_FAILURE, payload: error })
      }
    })
  }
}

export const addJournalEntry = (text) => {
  return (dispatch) => {
    dispatch({ type: JOURNAL_REQUEST })

    const JournalObject = Parse.Object.extend('Journal')
    const newPost = new JournalObject
    newPost.set('body', text)
    newPost.set('creationDate', new Date())
    newPost.set('importance', 0)
    newPost.set('username', 'Mikko')
    return newPost.save(null, {
      success: (post) => {
        dispatch({ type: JOURNAL_SUCCESS })
      },
      error: (post, error) => {
        dispatch({ type: JOURNAL_FAILURE, payload: error })
      }
    })
  }
}

export const removeJournalEntry = (item) => {
  return (dispatch) => {
    dispatch({ type: JOURNAL_REQUEST })

    // const JournalObject = Parse.Object.extend('Journal');
    // const query = new Parse.Query(JournalObject);
    //
    // return query.get(post_id)
    //   .then((post) => {
    return item.destroy({
      success: function (removed_post) {
        dispatch({ type: JOURNAL_SUCCESS })
      },
      error: function (removed_post, error) {
        dispatch({ type: JOURNAL_FAILURE, payload: error })
      }
    })
      // })
  }
}
