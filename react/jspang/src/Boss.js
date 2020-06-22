import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group'

class Boss extends Component {
    constructor(props) {
        super(props);
        this.state={
            isShow:true
        }
        this.toToggole=this.toToggole.bind(this)
    }
    render() { 
        return ( 
            <div>
                <CSSTransition
                    classNames='boss-text'
                    timeout={3000}
                    in={this.state.isShow}
                >
                    {/* <div className={this.state.isShow?'show':'hide'}>BOSS级人物-孙悟空</div> */}
                    <div>BOSS级人物-孙悟空</div>
                </CSSTransition>
                <div><button onClick={this.toToggole}>召唤Boss</button></div>
            </div>
         );
    }
    toToggole() {
        this.setState({
            isShow:!this.state.isShow
        })
    }
}
 
export default Boss;