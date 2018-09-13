import React,{Component} from 'react'
import {Icon,Card,Button} from 'antd'
import './index.less'

const { Meta } = Card;
export default class extends Component{
  constructor(){
    super();
    this.state = {
      cardData:[],
      contentLeft:0,
      timer:null,     //新闻中心滚动timer
      direction:1,    //滚动方向，1向右，-1向左
    }
  }
  prev = () => {
    cancelAnimationFrame(this.state.timer);
    this.startAnimation(-1);
    this.setState({direction:-1});
  }
  next = () => {
    cancelAnimationFrame(this.state.timer);
    this.startAnimation(1);
    this.setState({direction:1});
  }
  handleMouseEnter = () => {
    cancelAnimationFrame(this.state.timer);
  }
  handleMouseLeave = () => {
    this.startAnimation(this.state.direction);
  }
  startAnimation = (direction) => {
    const _this = this;
    let {timer,contentLeft} = this.state;
    timer = requestAnimationFrame(function fn(){
      if(direction === -1) {
        if (contentLeft > -1500) {
          contentLeft -= 5;
          timer = requestAnimationFrame(fn);
          _this.setState({contentLeft, timer});
        } else {
          contentLeft = 0;
          _this.setState({contentLeft});
          timer = requestAnimationFrame(fn);
          _this.setState({contentLeft, timer});
        }
      }else{
        if (contentLeft < 0) {
          contentLeft += 5;
          timer = requestAnimationFrame(fn);
          _this.setState({contentLeft, timer});
        } else {
          contentLeft = -1500;
          _this.setState({contentLeft});
          timer = requestAnimationFrame(fn);
          _this.setState({contentLeft, timer});
        }
      }
    })
  }
  componentWillMount(){
    let contentLeft = 0;
    if(this.state.direction === 1){
      contentLeft = -1500;
    }
    this.setState({contentLeft,cardData:[
      {id:1,src:"./img/1.jpg"},
      {id:2,src:"./img/2.jpg"},
      {id:3,src:"./img/3.jpg"},
      {id:4,src:"./img/4.jpg"},
      {id:5,src:"./img/5.jpg"},
      {id:6,src:"./img/6.jpg"},
      {id:7,src:"./img/1.jpg"},
      {id:8,src:"./img/2.jpg"},
      {id:9,src:"./img/3.jpg"},
      {id:10,src:"./img/4.jpg"},
      {id:11,src:"./img/5.jpg"},
      {id:12,src:"./img/6.jpg"}
    ]});
  }
  componentDidMount(){
    this.startAnimation(this.state.direction);
  }
  componentWillUnmount(){
    cancelAnimationFrame(this.state.timer);
  }
  render(){
    const {cardData,contentLeft} = this.state;
    console.log(contentLeft);
    return (
      <div>
        <div className="newsCenter">
          <div className="title">
            新闻中心
            <div className="newsIcon">
              <Icon type="left-square" onClick={this.prev}/>
              <Icon type="right-square" onClick={this.next}/>
            </div>
          </div>
          <div className="content" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
            <div className="content-main" style={{left:contentLeft}}>
              {cardData.map(value =>
              <div key={value.id} className="cardItem">
                <Card
                  hoverable="true"
                  style={{ width: 220 }}
                  cover={<img alt="example" src={require(`${value.src}`)}/>}
                >
                  <Meta
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci cupiditate eos"
                  />
                </Card>
              </div>
              )}
            </div>
          </div>
          <Button>更多</Button>
        </div>

      </div>
    )
  }
}