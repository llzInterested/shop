import React,{Component} from 'react'
import { Input,Menu,Icon,Row,Col,Avatar,Drawer } from 'antd';
import './index.less'
import api from '@/api/api'

const Search = Input.Search;

export default class extends Component{
  constructor(){
    super();
    this.state = {
      navigationVisible:false,  //导航栏是否可见
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
  toggleNavigation = () => {
    api.toggleClass(this.refs.navigationList,'navigation-list-active');
  };
  render(){
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
                defaultSelectedKeys={['2']}
                className="header-menu"
              >
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
                <Menu.Item key="4">nav 4</Menu.Item>
                <Menu.Item key="5">nav 5</Menu.Item>
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
              <p>Nav 1</p>
              <p>Nav 2</p>
              <p>Nav 3</p>
              <p>Nav 4</p>
              <p>Nav 5</p>
            </Drawer>
          </div>
        </div>
      </div>
    )
  }
}