import { createContext } from 'react'
import * as action from '../redux/action'
//redux home  demo
import React, { Component } from 'react'
// import store
import { store } from '../redux/store'
class ReduxHome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      age: store.getState(),
    }
  }

  //註冊監聽
  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        age: store.getState(),
      })
    })
  }

  render() {
    return (
      <div>
        Redux store data: {this.state.age}
        <button
          onClick={() => {
            store.dispatch(action.add(1))
          }}
        >
          加一
        </button>
        <button
          onClick={() => {
            store.dispatch(action.del(1))
          }}
        >
          減一
        </button>
      </div>
    )
  }
}

export default ReduxHome
