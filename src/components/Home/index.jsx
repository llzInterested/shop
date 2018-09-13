import React,{Component} from 'react'
import { Carousel } from 'antd';
import './index.less'
import NewsCenter from './components/NewsCenter/index'
import Footer from '@/components/Footer/index'

export default class extends Component{
  render(){
    return (
      <div>
        <div className="main">
          {/*轮播*/}
          <Carousel autoplay>
            <div><img src={require('./img/01.jpeg')} alt="轮播图1"/></div>
            <div><img src={require('./img/02.jpeg')} alt="轮播图2"/></div>
            <div><img src={require('./img/03.jpeg')} alt="轮播图3"/></div>
            <div><img src={require('./img/04.jpeg')} alt="轮播图4"/></div>
          </Carousel>
          {/*魅力展示*/}
          <div className="charmShow">

          </div>
          {/*新闻中心*/}
          <NewsCenter/>
        </div>
      </div>
    )
  }
}