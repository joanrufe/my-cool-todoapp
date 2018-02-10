import { actionTypes } from '../actions'
import _ from 'lodash'
import moment from 'moment'
import { arrayObjAssign } from '../utils'

export class CheckListState {
  categories = []
  items = []
  currentValue = ''
  loading = false
  errors = []
}

export class Item {
  constructor(value, id = false) {
    this.text = value
    this.checked = false
    this.created = moment().utc().format()
    if(id) this.id = _.uniqueId()
  }
}

export const checkListReducer = (state = new CheckListState(), action) => {
  switch (action.type) {
    case actionTypes.REMOVE_ITEM:
      return removeItem(state, action.payload)
    case actionTypes.ADD_ITEM:
      return addItem(state, action.payload)
    case actionTypes.TOGGLE_ITEM:
      return toggleItem(state, action.payload)
    case actionTypes.UPDATE_VALUE:
      return {
        ...state,
        currentValue: action.payload
      }
    // Request
    case actionTypes.FETCH_ITEMS_REQUEST:
    case actionTypes.DELETE_ITEMS_REQUEST:
    case actionTypes.POST_ITEMS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case actionTypes.DELETE_ITEMS_SUCCESS:
    case actionTypes.POST_ITEMS_SUCCESS:
      return {
        ...state,
        loading: false
      }
    case actionTypes.FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        items: [
          ...action.payload
        ],
        loading: false
      }
    // Errors
    case actionTypes.DELETE_ITEMS_FAILURE:
    case actionTypes.FETCH_ITEMS_FAILURE:
    case actionTypes.POST_ITEMS_FAILURE:
      return {
        ...state,
        loading: false,
        errors: [
          ...state.errors,
          action.payload
        ]
      }
    case actionTypes.CLEAN_ERRORS:
      return {
        ...state,
        errors: []
      }
    default:
      return state
  }
}

function removeItem(state, id) {
  return {
    ...state,
    items: [
      ...state.items.filter(item => item.id !== id)
    ]
  }
}

function toggleItem(state, id) {
  const index = _.findIndex(state.items, { id: id })
  const nextCheckedValue = !state.items[index].checked
  const nextItems = arrayObjAssign(state.items, id, { checked: nextCheckedValue })
  return {
    ...state,
    items: nextItems
  }
}

function addItem(state, item) {
  return {
    ...state,
    items: [
      ...state.items,
      item
    ],
    currentValue: ''
  }
}
