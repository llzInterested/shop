import React from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import axios from 'axios'
import Home from '@/components/Home/index'
import Header from '@/components/Header/index'
import Footer from '@/components/Footer/index'
import Abort from '@/components/Abort/index'

export default class App extends React.Component {
    componentDidMount(){
      // axios.get(`http://localhost:8080/user/getuser/1`).then(res => {
      //   console.log(res);
      // });
    }
    render () {
        return (
           <div>
               <Header/>
               <Switch>
                   <Route path="/" exact component={Home}></Route>
                   <Route path="/index" component={Home}></Route>
                   <Route path="/abort" component={Abort}></Route>
               </Switch>
               <Footer/>
           </div>
    )
    }
}