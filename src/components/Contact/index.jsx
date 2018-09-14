import React,{Component} from 'react'
import './index.less'
import {Button,Card} from 'antd'
const { Meta,Grid } = Card;
export default class extends Component{
  constructor(){
    super();
    this.state = {
      topData:[],
      bottomData:[],
    }
  }
  componentWillMount(){
    this.setState({bottomData:[
      {id:'b1',src:'./img/1.jpg',job:'市场总监',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda est impedit, in modi nostrum quo tenetur. Autem dol'},
      {id:'b2',src:'./img/2.jpg',job:'市场总监',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda est impedit, in modi nostrum quo tenetur. Autem dol'},
      {id:'b3',src:'./img/3.jpg',job:'市场总监',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda est impedit, in modi nostrum quo tenetur. Autem dol'},
      {id:'b4',src:'./img/4.jpg',job:'市场总监',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda est impedit, in modi nostrum quo tenetur. Autem dol'},
    ],topData:[
      {id:'t1',content:'1111111'},
      {id:'t2',content:'2222222'},
      {id:'t3',content:'3333333'},
      {id:'t4',content:'4444444'},
      {id:'t5',content:'5555555'},
      {id:'t6',content:'6666666'},
      {id:'t7',content:'7777777'},
      {id:'t8',content:'8888888'}
    ]})
  }
  render(){
    const {bottomData,topData} = this.state;
    return (
      <div className="contact">
        <div className="contact-top">
          <Card>
          {topData.map(value =>
              <Grid className="topCard" key={value.id}>{value.content}</Grid>
          )}
          </Card>
        </div>
        <Button className="centerBtn">员工风采</Button>
        <div className="contact-center">
          <img src={require('./img/01.jpeg')} alt="员工风采"/>
        </div>
        <Button className="centerBtn">加入我们</Button>
        <div className="contact-bottom">
          {bottomData.map(value =>
            <Card key={value.id}
              hoverable
              style={{ width: 200 }}
              cover={<img alt="加入我们" src={require(`${value.src}`)} height="300px"/>}
            >
              <Meta
                title={value.job}
                description={value.desc}
              />
            </Card>
          )}
        </div>
      </div>
    )
  }
}