import { connect } from 'react-redux';
import {
  updateValueAC, addItemAC, removeItemAC, toggleAC,
  reqItemsAC, reqDoneItemsAC, reqFailItemsAC,
  reqDelItemAC, reqDelItemDoneAC, reqDelItemFailAC,
  reqPostItemAC, reqPostItemFailAC, reqPostItemDoneAC,
  reqUpdateItemAC, reqUpdateItemDoneAC, reqUpdateItemFailAC
} from '../actions/'
import api from '../api'
import { Item } from '../reducers'
import { CheckListApp } from './CheckListApp'

const mapStateToProps = state => ({
  items: state.checkListReducer.items,
  currentValue: state.checkListReducer.currentValue,
  loading: state.checkListReducer.loading,
  errors: state.checkListReducer.errors
})

const mapDispatchToProps = dispatch => {
  return {
    onToggle: item => {
      const newItem = {
        ...item,
        checked: !item.cheched
      }
      dispatch(reqUpdateItemAC())
      api.updateItem(newItem)
        .then(res => {
          dispatch(reqUpdateItemDoneAC(res))
          dispatch(toggleAC(item.id))
        })
        .catch(err => dispatch(reqUpdateItemFailAC(err)))
    },
    onRemove: id => {
      dispatch(removeItemAC(id))
      dispatch(reqDelItemAC(id))
      api.deleteItem(id)
        .then(res => dispatch(reqDelItemDoneAC(res)))
        .catch(err => dispatch(reqDelItemFailAC(err)))
    },
    onChange: val => dispatch(updateValueAC(val)),
    fetchData: () => {
      dispatch(reqItemsAC())
      return api.getAll()
        .then(res => dispatch(reqDoneItemsAC(res)))
        .catch(err => dispatch(reqFailItemsAC(err)))
    },
    submitValue: val => {
      const item = new Item(val)
      dispatch(reqPostItemAC())
      return api.postItem(item)
        .then(res => {
          dispatch(reqPostItemDoneAC(res))
          dispatch(addItemAC(res))
        })
        .catch(err => dispatch(reqPostItemFailAC(err)))
    }
  }
}

export const CheckListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckListApp)
