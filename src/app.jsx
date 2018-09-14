import React from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import axios from 'axios'
import Home from '@/components/Home/index'
import Header from '@/components/Header/index'
import Footer from '@/components/Footer/index'
import Abort from '@/components/Abort/index'
import Contact from '@/components/Contact/index'
import News from '@/components/News/index'
import Business from '@/components/Business/index'

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
           <Route path="/" exact render={() => <Redirect to="/index"/>}/>
           <Route path="/index" component={Home}/>
           <Route path="/abort" component={Abort}/>
           <Route path="/contact" component={Contact}/>
           <Route path="/news" component={News}/>
           <Route path="/business" component={Business}/>
         </Switch>
         <Footer/>
       </div>
    )
  }
}