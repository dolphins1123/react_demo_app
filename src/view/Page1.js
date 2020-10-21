import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import  { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
class Page1 extends Component {

    constructor(props) {
      super(props);

      this.state = {
         data: 'Initial data...'
      }
        this.updateState = this.updateState.bind(this);
          this.clearState = this.clearState.bind(this);
    };
      updateState(e) {
      this.setState({data: e.target.value});
    }
    clearState() {
        this.setState({ data: '' });
        ReactDOM.findDOMNode(this.refs.myInput).focus();
}

    render() {
        return (
            <div>
                <h1>Page1</h1>
                <h2> on change</h2>
                <input type = "text" ref="myInput" value = {this.state.data} onChange = {this.updateState} />
                <button onClick = {this.clearState}  >CLEAR</button>
                <h4>{this.state.data}</h4>
            </div>
        );
        }
}

export default Page1;
