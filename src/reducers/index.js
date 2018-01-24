import { checkListReducer } from './checklist'
import { combineReducers } from 'redux'

export { CheckListState, checkListReducer } from './checklist'
export const reducers =  combineReducers({
  checkListReducer
})
