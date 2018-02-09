import { checkListReducer } from './checklist'
import { combineReducers } from 'redux'

export { CheckListState, Item, checkListReducer } from './checklist'
export const reducers =  combineReducers({
  checkListReducer
})

export default reducers