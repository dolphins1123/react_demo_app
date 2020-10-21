import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Home from './componemts/Home'
import ReduxHome from './componemts/ReduxHome'
//import { Router, Route, Link } from 'react-router'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  withRouter,
} from 'react-router-dom'
import Page1 from './view/Page1'
import Page2 from './view/Page2'
import AxiosDemo from './componemts/AxiosDemo'
import Anicss from './view/Anicss'

function App(props) {
  console.log('props=', props)

  let [val, setVel] = useState(0) //多次聲明

  let [val2, setVel2] = useState('a')

  // let [val, setVel] = useState({
  //   val1: 0, //使用聲明對象宣告
  //   val2: 'a',
  //   val3: 1.23,
  // })

  // useState 需要在 無狀態頁面做
  return (
    <div className='App'>
      <Router>
        <ul>
          <li>
            <NavLink to='Home'>Home</NavLink>
          </li>
          <li>
            <NavLink to='Page1'>Page1</NavLink>
          </li>
          <li>
            <NavLink to='Page2'>Page2</NavLink>
          </li>
          <li>
            <NavLink to='AxiosDemo'>AxiosDemo</NavLink>
          </li>
          <li>
            <NavLink to='Anicss'>動畫</NavLink>
          </li>
          <li>
            <NavLink to='ReduxHome'>Redux</NavLink>
          </li>
        </ul>

        <Switch>
          <Route path='/Home' component={Home} />
          <Route path='/Page1' component={Page1} />
          <Route path='/Page2' component={Page2} />
          <Route path='/AxiosDemo' component={AxiosDemo} />
          <Route path='/Anicss' component={Anicss} />
          <Route path='/ReduxHome' component={ReduxHome} />
        </Switch>
      </Router>
      <hr />
      useState 數據: {val} ........ {val2}....
      <br />
      <button
        onClick={() => {
          setVel(val + 1)
        }}
      >
        修改val數據
      </button>
    </div>
  )
}

export default App
