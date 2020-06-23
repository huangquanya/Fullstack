import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store/index'


class TodoList extends Component {
    constructor(props) {
        super(props)
        // console.log(store.getState())
        this.state = store.getState()
        this.changeInputValue=this.changeInputValue.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.changeListValue=this.changeListValue.bind(this)
        store.subscribe(this.storeChange)
    }
    render() { 
        return ( 
            <div style={{margin:'10px'}}>
                <div>
                    <Input 
                        placeholder={this.state.inputValue} 
                        style={{width:'500px'}} 
                        onChange={this.changeInputValue}
                        value={this.state.innerValue}
                        />
                    <Button 
                        type='primary' 
                        onClick={this.changeListValue}
                        >
                            添加
                        </Button>
                    <div style={{width:'300px'}}>
                        <List
                            bordered
                            dataSource={this.state.list}
                            renderItem={item=>(
                            <List.Item>
                                {item}
                            </List.Item>)}
                        
                        />
                    </div>
                    
                </div>
            </div>
         );
    }
    changeInputValue(e) {
        const action = {
            type: 'changeInputValue',
            value: e.target.value
        }
        store.dispatch(action)
    }
    changeListValue() {
        const action = {
            type: 'changeListValue', 
        }
        store.dispatch(action)
    }
    storeChange() {
        this.setState(
            store.getState()
            )
    }
}

 
export default TodoList;