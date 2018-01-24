import { connect } from 'react-redux';
import { toogleAction } from '../actions/'
import { CheckListApp } from './CheckListApp'
import { actionTypes } from '../actions'

const mapStateToProps = state => ({ 
  items: state.checkListReducer.items,
  currentValue: state.checkListReducer.currentValue
})

const mapDispatchToProps = dispatch => {
  return {
    onToggle: itemId => {
      dispatch(toogleAction(itemId))
    },
    onRemove: itemId => dispatch({
      type: actionTypes.REMOVE_ITEM,
      payload: itemId
    }),
    onChange: val => {
      dispatch({
        type: actionTypes.UPDATE_VALUE,
        payload: val
      })
    },
    submitValue: () => dispatch({type: actionTypes.ADD_ITEM})
  }
}

export const CheckListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckListApp)