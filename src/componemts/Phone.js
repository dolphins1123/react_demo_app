import React, { Component } from 'react';
import PubSub from 'pubsub-js'


class Phone extends Component {
    constructor(props){
        super(props)
        //subscribe    eventName 跟 callBack
        PubSub.subscribe("NewsRSS",(msg,data)=>{
            console.log( parseInt( Math.random()*1000) + "收到NEWS參數"+   data);
            this.setState({              
                ziText:data
            })
        })
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


    render() {
        return (
            <div>
                 Phone 是子組件.  ziText 參數是[ {this.state.ziText} ]

            </div>
        );
    }
}




export default Phone;
