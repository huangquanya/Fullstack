import React from 'react';
import Index from './pages/Index'
import List from './pages/List'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Link} from "react-router-dom"

// function Index() {
//     return <h2>Jspang</h2>
// }

// function List() {
//     return <h2>ListPage</h2>
// }

function AppRouter(){
    return(
        <Router>
            <ul>
                <li><Link to='/'>首页</Link></li>
                <li><Link to='/list/1'>列表</Link></li>
            </ul>
            <Route path='/' exact component={Index} />
            <Route path="/home/" component={Home} />
            <Route path='/list/:id' component={List} />
        </Router>
    )
}

export default AppRouter; 