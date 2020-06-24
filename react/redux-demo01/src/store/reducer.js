import { CHANG_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from './actionTypes'


const defaultState = {
    inputValue: 'write something',
    innerValue: '',
    list: []
} //默认数据
// export default (state = defaultState, action) => {  //就是一个方法函数
//     switch(action.type){
//         case'changeInputValue':
//             // console.log(state,action)
//             let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
//             newState.inputValue = action.value
//             return {
//                 ...state,
//                 inputValue: action.value
//             }
        
//         case'changeListValue':
//             return {
//                 ...state,
//                 list: [...state.list,action.inputValue]
//             }
//         default:
//             return state
//     }
// }
export default (state = defaultState,action)=>{
    if(action.type === CHANG_INPUT){
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.innerValue = action.value
        return newState
    }
    //关键代码------------------start----------
    //state值只能传递，不能使用
    if(action.type === ADD_ITEM ){ //根据type值，编写业务逻辑
        let newState = JSON.parse(JSON.stringify(state)) 
        newState.list.push(newState.innerValue)  //push新的内容到列表中去
        newState.innerValue = ''
        return newState
    }
    if(action.type === DELETE_ITEM ){ //根据type值，编写业务逻辑
        let newState = JSON.parse(JSON.stringify(state)) 
        newState.list.splice(action.index,1)  
        return newState
    }
    if(action.type === GET_LIST ){ //根据type值，编写业务逻辑
        let newState = JSON.parse(JSON.stringify(state)) 
        newState.list  = action.data.list 
        return newState
    }
     //关键代码------------------end----------
    return state
}