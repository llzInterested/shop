import React,{Component} from 'react'
import './index.less'
import {Button} from 'antd'
export default class extends Component{
  constructor(){
    super();
    this.state = {
      newsData:[],
    }
  }
  componentWillMount(){
    this.setState({newsData:[
      {id:1,src:'./img/news01.jpeg',title:'新闻1',content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, eaque expedita harum in quidem suscipit voluptatem voluptates. Blanditiis esse exercitationem iure iusto odit pariatur quasi quibusdam voluptatibus! Animi molestiae, sapieLorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, eaque expedita harum in quidem suscipit voluptatem voluptates. Blanditiis esse exercitationem iure iusto odit pariatur quasi quibusdam voluptatibus! Animi molestiae, sapie'},
      {id:2,src:'./img/news02.jpeg',title:'新闻2',content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, eaque expedita harum in quidem suscipit voluptatem voluptates. Blanditiis esse exercitationem iure iusto odit pariatur quasi quibusdam voluptatibus! Animi molestiae, sapieLorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, eaque expedita harum in quidem suscipit voluptatem voluptates. Blanditiis esse exercitationem iure iusto odit pariatur quasi quibusdam voluptatibus! Animi molestiae, sapie'},
      {id:3,src:'./img/news03.jpeg',title:'新闻3',content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, eaque expedita harum in quidem suscipit voluptatem voluptates. Blanditiis esse exercitationem iure iusto odit pariatur quasi quibusdam voluptatibus! Animi molestiae, sapieLorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, eaque expedita harum in quidem suscipit voluptatem voluptates. Blanditiis esse exercitationem iure iusto odit pariatur quasi quibusdam voluptatibus! Animi molestiae, sapie'}
    ]})
  }
  render(){
    const {newsData} = this.state;
    return (
      <div className="news">
        <div className="top">
          <img src={require('./img/01.jpeg')} alt="新闻中心" className="topImg"/>
        </div>
        <div className="center">
          <div className="center-main">
            <Button className="centerBtn">新闻中心</Button>
            <div className="center-list">
              {newsData.map(value =>
                <div className="center-item" key={value.id}>
                  <div className="item-left"><img src={require(`${value.src}`)} alt="新闻" className="itemImg"/></div>
                  <div className="item-content">
                    <p className="content-title">{value.title}</p>
                    <p className="content">{value.content}</p>
                  </div>
                </div>
              )}
              <Button className="centerBtn">更多</Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}