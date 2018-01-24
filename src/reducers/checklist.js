import { actionTypes } from '../actions'
import _ from 'lodash-uuid'
import moment from 'moment'

export class CheckListState {
  categories = []
  items = []
  currentValue = ''
}

class Item {
  constructor(value){
    this.itemId = _.uuid()
    this.text = value
    this.checked = false
    this.created = moment()
  }
}

export const checkListReducer = (state = new CheckListState(), action) => {
  const { items, categories } = state
  switch (action.type) {
    case actionTypes.REMOVE_ITEM:
      return {
        ...state,
        items: items.filter(item => item.itemId !== action.payload)
      }
    case actionTypes.ADD_ITEM:
      return addItem(state)
    case actionTypes.TOGGLE_ITEM:
      return toggleItem(state, action.payload)
    case actionTypes.UPDATE_VALUE:
      return {
        ...state,
        currentValue : action.payload
      }
    case actionTypes.REMOVE_ITEM:
      return removeItem(state, action.payload)
    default:
      return state
  }
}

function removeItem(state, itemId){
  return {
    ...state,
    items: [
      state.items.filter(item => item.itemId !== itemId)
    ]
  }
}

function toggleItem(state, itemId) {
  // Spread to a new item avoid mutate initalState
  const newItem = {
    ...state.items.find(item => item.itemId)
  }
  newItem.checked = !newItem.checked
  return {
    ...state,
    items: [
      ...state.items.filter(item => item.itemId !== itemId),
      newItem
    ]
  }
}

function addItem(state){
  return {
    ...state,
    items: [
      ...state.items,
      new Item(state.currentValue)
    ],
    currentValue: ''
  }
}