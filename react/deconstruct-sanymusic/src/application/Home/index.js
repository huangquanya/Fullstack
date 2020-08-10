import React from 'react';
import { renderRoutes } from "react-router-config";
import { NavLink } from 'react-router-dom';
import Player from '../Player/index';

function Home(props){
    const { route } = props;
  
    return (
      <div>
        <span onClick={()=>props.history.push('/search')}>search</span>
        { renderRoutes(route.routes) }
        <Player></Player>
      </div>
    );
}
 
export default React.memo(Home);