import React,  {useEffect, useState}  from 'react';
import {useSelector} from 'react-redux';
import {BrowserRouter, Switch, Route, NavLink, HashRouter} from 'react-router-dom';
import {store} from './store/store.js';
import {Movie, OneMovie} from './Movie.jsx';
import {Pagination} from 'antd';
import 'antd/dist/antd.css';

import styles from '/components/styles.scss';
import {SearchMovie} from './component-add-new-book/SearchMovie.jsx';
import Item from 'antd/lib/list/Item';
import {FullInfo} from './component-item/Item.jsx';
import {App} from './App.jsx';

// export const Nav = ({movies}) => {
// 	const activeStyle = {
// 		color: 'red',
// 		fontWeight: 'bold'
// 	  };

// 	return (
// <HashRouter>
//     <Switch>
// 	 {/* <Route exact path={'/movie'} component={OneMovie}></Route> */}
//       <Route exact path={'/movie'} component={OneMovie}></Route>
// 	  <div className={styles.boxItems}> 
// 	  <NavLink activeStyle={activeStyle} to={'/movie'}> 
//          {movies.length > 0 && movies.map(movie => (
//              <Movie data={movie} key={movie.id} {...movie} />
//           ))} </NavLink> 
// 	 </div>
//     </Switch>
//   </HashRouter>
// 	);
// };
