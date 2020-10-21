import React, { Component } from 'react';
import PubSub from 'pubsub-js'
//import PropTypes from 'prop-types';


class News extends Component {
    constructor(props){
        super(props)
        this.state={
            num:123,
            ziText:'xyz'
        }
    }

    // static propTypes={
    //     prop:PropTypes
    // }

    func(){
        this.setState({
            num:789,
            ziText:'xyz'
        })
    }

    post2Phone(){
        PubSub.publish("NewsRSS",this.state.num);  // 發行的EVENT 名稱.  訂閱者 要使用此NAME 
    }

    render() {
        return (
            <div>
                 NEW 是子組件.
                 <br/>
                 收參數 {this.props.text1}
                 <br/>
                 本地 state num: {this.state.num}
                 <button onClick={this.func.bind(this)}>點我改變state789</button>
                 <button onClick={this.props.fufun.bind(this,this.state.ziText)}>點我傳XYZ給HOME 父組件</button>
                 <br/>
                 <button onClick={this.post2Phone.bind(this)} >點我進行同級傳值.NEWS 傳到PHONE</button>
            </div>
        );
    }
}


News.propTypes = {

};


export default News;
