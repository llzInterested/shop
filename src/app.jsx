import React from 'react'
import {Button} from 'antd'
import axios from 'axios'
export default class App extends React.Component {
    componentDidMount(){
      // axios.get(`http://localhost:8080/user/getuser/1`).then(res => {
      //   console.log(res);
      // });
      console.log(process.env);
    }
    render () {
        return (
           <div>
             <Button type="primary">adasd</Button>
           </div>
    )
    }
}