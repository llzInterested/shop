import React,{Component} from 'react'
import './index.less'
import '@/index.less'
export default class extends Component{
  render(){
    return (
      <div className="footer">
        <footer className="footer-main">
          <div className="itemList">
            <ul>
              <li className="item">关于我们</li>
              <li className="item">加入我们</li>
              <li className="item">联系我们</li>
            </ul>
          </div>
          <div className="itemList">
            <div className="itemList2">
              <h3>旗下官网</h3>
              <ul>
                <li className="item">官网111</li>
                <li className="item">官网222</li>
                <li className="item">官网333</li>
              </ul>
            </div>
          </div>
          <div className="itemList">3</div>
          <div className="itemList">4</div>
        </footer>
      </div>
    )
  }
}