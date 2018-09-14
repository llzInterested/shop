import React,{Component} from 'react'
import './index.less'
import {Card} from 'antd'
const tabListNoTitle = [{
  key: '0',
  tab: 'article',
}, {
  key: '1',
  tab: 'app',
}, {
  key: '2',
  tab: 'project',
}];
const contentListNoTitle = {
  0: <p>article content</p>,
  1: <p>app content</p>,
  2: <p>project content</p>,
};
export default class extends Component{
  constructor(){
    super();
    this.state = {
      title:[],
      content:[],
      selected:0,
    }
  }
  onTabChange = (key) => {
    console.log(key);
    this.setState({selected:key});
  }
  componentWillMount(){
    const businessData = [
      {id:1,key:1,tab:'业务介绍1',content:{src:'./img/business01.jpeg',title:'title1',detail:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi consectetur expedita nihil? Amet corporis enim natus odio quia recusandae sint. Amet autem dicta eligendi soluta? Adipisci cum ipsum voluptatum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi consectetur expedita nihil? Amet corporis enim natus odio quia recusandae sint. Amet autem dicta eligendi soluta? Adipisci cum ipsum voluptatum.'}},
      {id:2,key:2,tab:'业务介绍2',content:{src:'./img/business02.jpeg',title:'title2',detail:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi consectetur expedita nihil? Amet corporis enim natus odio quia recusandae sint. Amet autem dicta eligendi soluta? Adipisci cum ipsum voluptatum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi consectetur expedita nihil? Amet corporis enim natus odio quia recusandae sint. Amet autem dicta eligendi soluta? Adipisci cum ipsum voluptatum.'}},
      {id:3,key:3,tab:'业务介绍3',content:{src:'./img/business03.jpeg',title:'title3',detail:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi consectetur expedita nihil? Amet corporis enim natus odio quia recusandae sint. Amet autem dicta eligendi soluta? Adipisci cum ipsum voluptatum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi consectetur expedita nihil? Amet corporis enim natus odio quia recusandae sint. Amet autem dicta eligendi soluta? Adipisci cum ipsum voluptatum.'}}
    ];
    let title = [],content = {};
    businessData.forEach(value => {
      title.push({key:value.key,tab:value.tab});
      content[value.key] = value.content;
    })
    console.log(title);
    console.log(content);
  }
  render(){
    const {businessData} = this.state;
    return (
      <div className="business">
        <img src={require('./img/01.jpeg')} alt="业务介绍" className="businessImg"/>
        <div className="business-center">
          <Card
            style={{ width: '100%' }}
            tabList={tabListNoTitle}
            // activeTabKey={this.state.noTitleKey}
            onTabChange={this.onTabChange}
          >
            {contentListNoTitle[this.state.selected]}
          </Card>
        </div>
      </div>
    )
  }
}