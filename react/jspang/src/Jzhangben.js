import React, { Component, Fragment } from 'react';
import Jzhang from './Jzhang'

class Jzhangben extends Component {
  // 在某一时刻，可以自动执行的函数
  constructor(props) {
    super(props)
    this.state={
      inputValue: '',  //input中的值
      list: ['吃饭','喝水']    // 服务器列表

    }
  }
  render() { 
    return ( 
      <Fragment>
        <div>
          <label htmlFor="js">记账本</label>
          <input 
            id='js' 
            className='jspang' 
            value={this.state.inputValue} 
            onChange={this.inputChange.bind(this)}
            ref = {(input)=>{this.input=input}}
          />
          <button onClick={this.insertValue.bind(this)}>增加账目</button>
        </div>
        <ul ref={(ul)=>{this.ul=ul}}>
          {
            this.state.list.map((item,index)=>{
            return(
              
              <div key={index+item}>
                  <Jzhang 
                   
                    content={item}
                    index={index}
                    deletItem={this.deletItem.bind(this)}
                    list={this.list}
                  />
              </div>
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
        </ul>
        
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
    },()=>{
      console.log(this.ul.querySelectorAll('li').length)
    })
  }
  deletItem(index){
    // console.log(index)
    let list = this.state.list;
    list.splice(index,1)
    this.setState({
      list
    })
  }
}
 
export default Jzhangben;