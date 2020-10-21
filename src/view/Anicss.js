import React, { Component } from 'react'
var ReactCSSTransitionGroup = require('react-addons-css-transition-group')
class Anicss extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <ReactCSSTransitionGroup
          transitionName='example'
          transitionAppear={true}
          transitionAppearTimeout={5000}
          transitionEnter={false}
          transitionLeave={false}
        >
          <h1>My Element...</h1>
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

export default Anicss
