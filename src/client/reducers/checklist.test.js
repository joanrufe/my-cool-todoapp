import { checkListReducer, CheckListState } from './'
import api from '../api'
import _ from 'lodash'
import { log } from '../utils'
import {
  actionTypes, addItemAC,
  removeItemAC, toggleAC, updateValueAC,
  reqItemsAC, reqDoneItemsAC, reqFailItemsAC
} from '../actions'
import { Item } from './checklist';

describe('checkListReducer - UI Action Types', () => {
  it('UPDATE_VALUE && ADD_ITEM & TOGGLE_ITEM & REMOVE_ITEM', () => {
    // Arrange
    const initialState = new CheckListState()

    // Act
    const updatedState = checkListReducer(initialState, updateValueAC('More stuff'))
    const newItem = new Item(updatedState.currentValue, true)
    const addedItemState = checkListReducer(updatedState, addItemAC(newItem))
    const index = _.findIndex(addedItemState.items, {id:newItem.id})
    const toggledItemState = checkListReducer(addedItemState, toggleAC(newItem.id))
    const deletedItemState = checkListReducer(toggledItemState, removeItemAC(newItem.id))

    // Assert
    expect(addedItemState.items[index].checked).toBe(false)
    expect(toggledItemState.items[index].checked).toBe(true)
    expect(deletedItemState.items.length).toBe(0)
  })
})
