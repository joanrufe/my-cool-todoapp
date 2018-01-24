import React, { Component } from 'react'
import logo from './logo.svg'
import api from './api/'
import { CheckListContainer } from './checklist-component'
import './App.css'

export const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <CheckListContainer />
  </div>
)
