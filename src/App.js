import React, { Component } from 'react'
import logo from './logo.svg'
import api from './api'
import './App.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      categories: api.getAll(),
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {
          this.state.categories.map(
            cat => <Category key={cat.id} {...cat} />
          )
        }
      </div>
    )
  }
}

const Category = ({id, title, items}) => {
  return (
    <div className="Category">
      <h5>{title}</h5>
      <ul>
        {
          items.map(
            item => (
              <li key={item.id}>
                <input type="checkbox" checked={item.checked} />
                {item.text}
              </li>
            )
          )
        }
      </ul>
    </div>
  )
}
export default App
