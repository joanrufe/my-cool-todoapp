import actionTypes from './actionTypes'

export const toggleAC = id => ({
  type: actionTypes.TOGGLE_ITEM,
  payload: id
})

export const removeItemAC = id => ({
  type: actionTypes.REMOVE_ITEM,
  payload: id
})

export const addItemAC = item => ({
  type: actionTypes.ADD_ITEM,
  payload: item
})

export const updateValueAC = val => ({
  type: actionTypes.UPDATE_VALUE,
  payload: val
})

export const reqItemsAC = () => ({
  type: actionTypes.FETCH_ITEMS_REQUEST
})

export const reqDoneItemsAC = res => ({
  type: actionTypes.FETCH_ITEMS_SUCCESS,
  payload: res
})

export const reqFailItemsAC = err => ({
  type: actionTypes.FETCH_ITEMS_FAILURE,
  payload: err
})

export const reqDelItemAC = () => ({
  type: actionTypes.DELETE_ITEMS_REQUEST
})

export const reqDelItemDoneAC = res => ({
  type: actionTypes.DELETE_ITEMS_SUCCESS,
  payload: res
})

export const reqDelItemFailAC = err => ({
  type: actionTypes.DELETE_ITEMS_FAILURE,
  payload: err
})

export const reqPostItemAC = () => ({
  type: actionTypes.POST_ITEMS_REQUEST
})

export const reqPostItemDoneAC = res => ({
  type: actionTypes.POST_ITEMS_SUCCESS,
  payload: res
})

export const reqPostItemFailAC = err => ({
  type: actionTypes.POST_ITEMS_FAILURE,
  payload: err
})

export const reqUpdateItemAC = () => ({
  type: actionTypes.UPDATE_ITEMS_REQUEST
})

export const reqUpdateItemDoneAC = res => ({
  type: actionTypes.UPDATE_ITEMS_SUCCESS,
  payload: res
})

export const reqUpdateItemFailAC = err => ({
  type: actionTypes.UPDATE_ITEMS_FAILURE,
  payload: err
})

export const cleanErrorsAC = () => ({ type: actionTypes.CLEAN_ERRORS })