import React,{Component} from 'react'
import './index.less'
export default class extends Component{
    render(){
        return (
            <div className="abort">
                <div className="topImg">
                  <img src={require('./img/01.jpeg')} alt="介绍宝信"/>
                </div>
            </div>
        )
    }
}