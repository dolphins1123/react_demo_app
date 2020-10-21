import React, { Component } from 'react';
import  { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
class Page2 extends Component {
     componentWillMount() {
      console.log('Component WILL MOUNT!')
   }
   componentDidMount() {
      console.log('Component DID MOUNT!')
   }
   componentWillReceiveProps(newProps) {    
      console.log('Component WILL RECIEVE PROPS!')
   }
   shouldComponentUpdate(newProps, newState) {
      return true;
   }
   componentWillUpdate(nextProps, nextState) {
      console.log('Component WILL UPDATE!');
   }
   componentDidUpdate(prevProps, prevState) {
      console.log('Component DID UPDATE!')
   }
   componentWillUnmount() {
      console.log('Component WILL UNMOUNT!')
   }
    render() {
        return (
            <div>
                <h1>Page2</h1>
                <p>生命週期</p>
            </div>
        );
    }
}

export default Page2;
