import React from 'react'
import { Provider } from 'react-redux';
import { store } from './store';
import { App } from './App';

export const AppProvider = () => {
  return (
    <Provider store={store}>
      <App/>
    </Provider>
  );
}