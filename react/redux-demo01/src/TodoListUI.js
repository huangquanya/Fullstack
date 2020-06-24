import React from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'

const TodoListUI = (props) => {
    return ( 
        <div style={{margin:'10px'}}>
                <div>
                    <Input 
                        placeholder={props.inputValue} 
                        style={{width:'500px'}} 
                        onChange={props.changeInputValue}
                        value={props.innerValue}
                        />
                    <Button 
                        type='primary' 
                        onClick={props.changeListValue}
                        >
                            添加
                        </Button>
                    <div style={{width:'300px'}}>
                        <List
                            bordered
                            dataSource={props.list}
                            renderItem={(item,index)=>(
                            <List.Item
                                onClick={()=>(props.deleteListValue(index))}
                            >
                                {item}
                            </List.Item>)}
                        />
                    </div>
                </div>
            </div>
     );
}
 
export default TodoListUI;