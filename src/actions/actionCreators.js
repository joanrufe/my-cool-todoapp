import actionTypes from './actionTypes'

export const toogleAction = itemId => ({
  type: actionTypes.TOGGLE_ITEM,
  payload: itemId
})

export const removeItemAction = itemId => ({
  type: actionTypes.REMOVE_ITEM,
  payload: itemId
})

export const addItemAction = item => ({
  type: actionTypes.ADD_ITEM,
  payload: item
})
