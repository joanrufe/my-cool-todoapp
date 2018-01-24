import { checkListReducer, CheckListState } from './'
import {actionTypes} from '../actions'

describe('checkListReducer', () => {
  // Set initialState to be used in all actions
  const initialState = new CheckListState()
  initialState.items = [
    {
      itemId: '49331e02-15cf-4437-9013-02b15da39962',
      text: 'Wash dishes',
      checked: false
    }
  ]
  initialState.currentValue = 'Clean room'
  
  it('ADD_ITEM', () => {
    const newState = checkListReducer(initialState, {
      type: actionTypes.ADD_ITEM
    })
    expect(newState.items.length).toBe(2)
    expect(newState.items[1].text).toBe('Clean room')
  })
  it('REMOVE_ITEM', () => {
    const newState = checkListReducer(initialState, {
      type: actionTypes.REMOVE_ITEM,
      payload: 1
    })
    expect(newState.items.length).toBe(1)
  })
  it('TOGGLE_ITEM', () => {
    const newState = checkListReducer(initialState, {
      type: actionTypes.TOGGLE_ITEM,
      payload: '49331e02-15cf-4437-9013-02b15da39962'
    })
    expect(initialState.items[0].checked).toBe(false)
    expect(newState.items[0].checked).toBe(true)
  })
  it('UPDATE_VALUE', () => {
    const newState = checkListReducer(initialState, {
      type: actionTypes.UPDATE_VALUE,
      payload: 'Stuff'
    })
    expect(newState.currentValue).toBe('Stuff')
  })
  it('REMOVE_ITEM', () => {
    const newState = checkListReducer(initialState, {
      type: actionTypes.REMOVE_ITEM,
      payload: '49331e02-15cf-4437-9013-02b15da39962'
    })
    expect(newState.items.length).toBe(0)
  })
})