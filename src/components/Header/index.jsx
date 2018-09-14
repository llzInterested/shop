import React,{Component} from 'react'
import { Input,Menu,Icon,Row,Col,Avatar,Drawer } from 'antd';
import {NavLink} from 'react-router-dom'
import './index.less'
import api from '@/api/api'

const Search = Input.Search;
const routeData = [
  {index:'1',path:'/index'},
  {index:'2',path:'/abort'},
  {index:'3',path:'/business'},
  {index:'4',path:'/news'},
  {index:'5',path:'/contact'},
];

export default class extends Component{
  constructor(){
    super();
    this.state = {
      navigationVisible:false,  //导航栏是否可见,
      selected:'1',   //选中第几个导航栏
    }
  }
  onClose = () => {
    this.setState({
      navigationVisible: false,
    });
  };
  showDrawer = () => {
    this.setState({
      navigationVisible: true,
    });
  };
  getSelected = () => {
    let selected = '0';
    routeData.forEach(value => {
      value.path === location.pathname ? selected = value.index : '';
    });
    this.setState({selected});
  }
  toggleNavigation = () => {
    api.toggleClass(this.refs.navigationList,'navigation-list-active');
  };
  componentWillReceiveProps(){
    this.getSelected();
  }
  componentDidMount(){
    this.getSelected();
  }
  render(){
    const {selected} = this.state;
    return(
      <div className="header">
        <Row type="flex" justify="space-around" align="middle" className='pc'>
          <div className="header-content">
            <Col lg={3} md={3} xl={3}>
              <img src={require("../Header/img/logo.jpg")} alt="logo" className="logoImg"/>
            </Col>
            <Col lg={12} md={12} xl={12}>
              <Menu
                theme="light"
                mode="horizontal"
                selectedKeys={[selected]}
                className="header-menu"
              >
                <Menu.Item key="1"><NavLink to="/index">nav 1</NavLink></Menu.Item>
                <Menu.Item key="2"><NavLink to="/abort">nav 2</NavLink></Menu.Item>
                <Menu.Item key="3"><NavLink to="/business">nav 3</NavLink></Menu.Item>
                <Menu.Item key="4"><NavLink to="/news">nav 4</NavLink></Menu.Item>
                <Menu.Item key="5"><NavLink to="/contact">nav 5</NavLink></Menu.Item>
              </Menu>
            </Col>
            <Col lg={9} md={9} xl={9} className="header-right">
              <Col lg={8} md={6} xl={{span:6,offset:2}}>
                <div className="login">
                  <Avatar icon="user"/> 登录
                </div>
              </Col>
              <Col lg={4} md={3} xl={4}><div className="register">注册</div></Col>
              <Col lg={12} md={15} xl={12}>
                <Search
                  onSearch={value => console.log(value)}
                  enterButton
                />
              </Col>
            </Col>
          </div>
        </Row>
        <div className="mobile">
          <Icon type="bars" style={{fontSize:'30px'}} onClick={this.showDrawer}/>
          <div ref="navigationList" className="navigation-list">
            <Drawer
              placement="left"
              closable={false}
              onClose={this.onClose}
              visible={this.state.navigationVisible}
            >
              <p>走进宝信</p>
              <p>Nav 2</p>
              <p>Nav 3</p>
              <p>Nav 4</p>
              <p>Nav 5</p>
              <div className="login">
                <Avatar icon="user"/> 登录 注册
              </div>
              <Search
                  onSearch={value => console.log(value)}
                  enterButton
              />
            </Drawer>
          </div>
        </div>
      </div>
    )
  }
}