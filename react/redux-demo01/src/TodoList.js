import React, { Component } from 'react';
import axios from 'axios'
import store from './store/index'
import { chageInputAction, addLIstAction, deleteListAction, getListAction } from './store/actionCreators'
import TodoListUI from './TodoListUI'


class TodoList extends Component {
    constructor(props) {
        super(props)
        // console.log(store.getState())
        this.state = store.getState()
        this.storeChange = this.storeChange.bind(this)
        this.changeInputValue=this.changeInputValue.bind(this)
        this.changeListValue=this.changeListValue.bind(this)
        this.deleteListValue=this.deleteListValue.bind(this)
        this.getList=this.getList.bind(this)
        store.subscribe(this.storeChange)
    }
    render() { 
        return ( 
            <TodoListUI
                innerValue={this.state.innerValue}
                list={this.state.list}
                changeListValue={this.changeListValue}
                changeInputValue={this.changeInputValue}
                deleteListValue={this.deleteListValue}
            />
         );
    }
    componentDidMount() {
        axios.get('http://rap2.taobao.org:38080/app/mock/258888/redux/demo01')
            .then((res)=>{
                const data = res.data
                this.getList(data)
            })
            .catch((err) => { console.log('axios 获取数据失败' + err) })
    }
    getList(data) {
        const action = getListAction(data)
        store.dispatch(action)
    }

    changeInputValue(e) {
        const action = chageInputAction(e.target.value)
        store.dispatch(action)
    }
    changeListValue() {
        const action = addLIstAction()
        store.dispatch(action)
    }
    deleteListValue(index) {
        const action = deleteListAction(index)
        store.dispatch(action)
    }
    storeChange() {
        this.setState(
            store.getState()
            )
    }
}

 
export default TodoList;