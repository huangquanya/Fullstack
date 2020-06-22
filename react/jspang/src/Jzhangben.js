import React, { Component, Fragment } from 'react';
import Jzhang from './Jzhang'
import Boss from './Boss'
import axios from 'axios'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './jzhangben.css'

class Jzhangben extends Component {
  // 在某一时刻，可以自动执行的函数
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',  //input中的值
      list: []    // 服务器列表

    }
  }
  render() {
    console.log('render---组件挂载中.......')
    return (

      <Fragment>
        <div>
          <label htmlFor="js">记账本</label>
          <input
            id='js'
            className='jspang'
            value={this.state.inputValue}
            onChange={this.inputChange.bind(this)}
            ref={(input) => { this.input = input }}
          />
          <button onClick={this.insertValue.bind(this)}>增加账目</button>
        </div>
        <ul ref={(ul) => { this.ul = ul }}>
          <TransitionGroup>
            {
              this.state.list.map((item, index) => {
                return (

                  
                    <CSSTransition
                      timeout={1000}
                      classNames='boss-text'
                      unmountOnExit
                      appear={true}
                      key={index+item}  
                    >
                      <Jzhang

                        content={item}
                        index={index}
                        deletItem={this.deletItem.bind(this)}
                        list={this.list}
                      />
                    </CSSTransition>
                  
                )
                //  <li 
                //           key={item+index}
                //           onClick={this.deletItem.bind(this,index)}
                //           content={index}
                //           >
                //             {item}
                // </li>
              })
            }
          </TransitionGroup>
        </ul>
        <Boss />

      </Fragment>
    );
  }
  inputChange() {
    this.setState({
      inputValue: this.input.value
    })
  }
  insertValue() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    }, () => {
      console.log(this.ul.querySelectorAll('li').length)
    })
  }
  deletItem(index) {
    // console.log(index)
    let list = this.state.list;
    list.splice(index, 1)
    this.setState({
      list
    })
  }
  componentDidMount() {
    axios.get('http://rap2.taobao.org:38080/app/mock/258888/Jspang-react/Jzhang')
      .then((res) => {
        console.log('axios 获取数据成功' + JSON.stringify(res.data.list))
        this.setState({
          list: res.data.list
        })
      })
      .catch((err) => { console.log('axios 获取数据失败' + err) })
  }

  //   componentWillMount(){
  //     console.log('1.componentWillMount----组件将要挂载到页面的时刻')
  //   }
  //   componentDidMount(){
  //     console.log('3.componentDidMount----组件挂载完成的时刻执行')
  //   }
  //   shouldComponentUpdate(){
  //     console.log('4.shouldComponentUpdate---组件发生改变前执行')
  //     return true
  //   }
  //   componentDidUpdate(){
  //     console.log('6.componentDidUpdate----组件更新之后执行')
  //   }
}

export default Jzhangben;