import React from 'react'
import {Button} from 'antd'
import axios from 'axios'
import Home from '@/components/Home/index'
export default class App extends React.Component {
    componentDidMount(){
      axios.get(`http://localhost:8080/user/getuser/1`).then(res => {
        console.log(res);
      });
    }
    render () {
        return (
           <Home/>
    )
    }
}