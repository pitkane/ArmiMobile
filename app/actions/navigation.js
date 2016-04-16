
export const CHANGE_TAB = 'CHANGE_TAB'

export const changeTab = (newTab) => {
  return {
    type: CHANGE_TAB,
    payload: newTab
  }
}
