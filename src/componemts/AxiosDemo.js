import React, { Component } from 'react';
import axios from 'axios'
class AxiosDemo extends Component {
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }

     //axios   mount
     componentDidMount(){
        this.ajaxFunc()
    }

    ajaxFunc=()=>{
       axios.get("http://localhost:4000/data").then((ok)=>{
           this.setState({
            data:ok.data
           })
           
           
        console.log( 'json data=',ok.data);
        console.log( 'state data=',this.state.data);

       })
    }


    
    render() {
        return (
            <div>
                <p>AxiosDemo</p>
                <p>DEMO需要配合啟用 json-server</p>
                {this.state.data.map((value,index)=>{
                    return   <p key={index}>{value.email}</p>
                })}

            </div>
        );
    }
}

export default AxiosDemo;
