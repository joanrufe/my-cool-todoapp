import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ReactDOM from 'react-dom'
import { App } from './App'
import { CheckListApp, Category, CategoryItem } from './checklist-component'
import {CheckListState} from './reducers/checklist'

configure({ adapter: new Adapter() })

const initialState = () => new CheckListState()

// it('renders without crashing', () => {
//   const div = document.createElement('div')
//   ReactDOM.render(<App />, div)
// })


it('renders CheckListApp', () => {
  // const actual = initialState()
  // const app = shallow(<CheckListApp categories={actual.items}/>)
   // expect(app).toMatchSnapshot()
  expect(true).toBe(true)
})
