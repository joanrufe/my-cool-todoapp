import { createStore, applyMiddleware, compose } from 'redux';
import {reducers} from './reducers';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger'

export const store = createStore(
  reducers,
  compose(
    applyMiddleware(reduxThunk),
    // applyMiddleware(logger),
    window['devToolsExtension'] ? window['devToolsExtension']() : f => f
  )  
)
