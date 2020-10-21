import React, { Component } from 'react';
import News from '../componemts/News'
import Phone from '../componemts/Phone'


class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            text:'父組件初始值',
            data:[]
        }
    }

   
    datafun=(text)=>{
        console.log(text);
        this.setState({
            text //text equals  text 
        })
    }

    render() {
        return (
            <>  {/* 可以用 空標籤 或是  Fragment   包多個標籤  */}
                這是HOME 組件 {parseInt(Math.random()*10)}
                <br/>
                接收子組件參數: {this.state.text}

                <br/>
                傳遞參數到 子組件
                <News text1={"ABCD1234"} fufun={this.datafun}   />
                <Phone/>
               
               
            </>
        );
    }
}

export default Home;
