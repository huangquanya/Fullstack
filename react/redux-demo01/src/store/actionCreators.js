import { CHANG_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from './actionTypes'

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