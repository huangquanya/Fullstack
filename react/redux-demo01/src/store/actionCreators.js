import { CHANG_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from './actionTypes'
import axios from 'axios'

export const getTodoList = () =>{
    return (dispatch)=>{
        axios.get('http://rap2.taobao.org:38080/app/mock/258888/redux/demo01')
            .then((res)=>{
                const data = res.data
                const action = getListAction(data)
                console.log(action)
                dispatch(action)
            })
    }
}


export const chageInputAction = (value)=>({
    type: CHANG_INPUT,
    value
})

export const addLIstAction = ()=>({
    type: ADD_ITEM
})

export const deleteListAction = (index)=>({
    type: DELETE_ITEM, 
    index
})

export const getListAction = (data)=>({
    type: GET_LIST, 
    data
})