import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Jzhang extends Component {
    constructor(props ) {
        super(props)
        this.handleClick=this.handleClick.bind(this)
    }
    render() { 
        console.log('child-render')
        return ( 
            // <li 
            //           key={item+index}
            //           onClick={this.deletItem.bind(this,index)}
            //           content={index}
            //           >
            //             {item}
            // </li>
            <li onClick={this.handleClick} >
                {this.props.avName} 为你服务{this.props.content}
            </li>
         );
    }
    handleClick() {
        this.props.deletItem(this.props.index)
    }
    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.content !== this.props.content){
            return true;
        }
        return false;
    }
    // static getDerivedStateFromProps(props, state) {
    //     console.log('2.getDerivedStateFromProps')
    // }
    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     console.log('5.getSnapshotBeforeUpdate')

    // }
}

Jzhang.propTypes={
    avName:PropTypes.string.isRequired,
    content:PropTypes.string,
    index:PropTypes.number,
    deletItem:PropTypes.func
}
Jzhang.defaultProps={
    avName:'白敬亭'
}
export default Jzhang;