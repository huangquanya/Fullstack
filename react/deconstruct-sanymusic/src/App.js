import React from 'react';
import { IconStyle } from './assets/iconfont/iconfont';
import { GlobalStyle } from './style';
import routes from "./routes/index";
import { renderRoutes } from "react-router-config";//renderRoutes 读取路由配置转化为 Route 标签
import { HashRouter } from "react-router-dom";
import store from './store'
import { Provider } from 'react-redux'
import {Data} from './application/Singers/data'


function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <GlobalStyle></GlobalStyle>
        <IconStyle></IconStyle>
        <Data>
          {renderRoutes(routes)}
        </Data>
      </HashRouter>
    </Provider>
  );
}

export default App;
