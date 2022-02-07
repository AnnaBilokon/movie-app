import React,  {useEffect, useState}  from 'react';
import {BrowserRouter, Switch, Route, NavLink, HashRouter} from 'react-router-dom';
import {Movie, OneMovie} from './Movie.jsx';
import {Pagination} from 'antd';
import 'antd/dist/antd.css';

import styles from '/components/styles.scss';
import {SearchMovie} from './component-add-new-book/SearchMovie.jsx';
import Item from 'antd/lib/list/Item';

export const App = () => {

		const [movies, setMovie] = useState([]);
		const [paginationValue, setPaginationValue] = useState(1);
		const onChangePagination = (current) => {
			console.log(current);
			setPaginationValue(current);
		  };
		  console.log('1', paginationValue);
		  
		useEffect(() => {
		  fetch(`https://api.themoviedb.org/3/movie/popular?api_key=9b47375a58b820da3e1293213c50ac24&language=en-US&page=${paginationValue}`)
			.then((res) => res.json())
			.then((data) => {
				const allMovies = data.results;
			  setMovie(allMovies);
			  console.log(data.results);
			const genre_name = data.genres[0].name;
			  console.log('genre', genre_name);
			  
			});
		  return () => {};
		},[paginationValue]);

		const [filterObj, setFilterObj] = useState({
			filterStr: ''
		  });

		  const {filterStr} = filterObj;
		  const {title} = movies;

		  const filterInpHandler = (filterStr) => {
			setFilterObj({
			  filterStr: filterStr
			});
		  };

		  const filterNameByText = (title, filterStr) => {
			if (filterStr === '') {
			  return movies;
			  
			}
			return movies.filter(({title}) =>
			  title.toLowerCase().includes(filterStr.toLowerCase())
			);
		  };

		  const filteredMovies = filterNameByText(title, filterStr);
//   const {arr} = movie;
//   if (!arr) {
//     return (
//       <div>
//         Loading Loading
//       </div>
//     );
//   }

const {poster_path, overview, genre_ids, vote_average, id} = movies;
return (
    <> 
	<div className={styles.searchField}>
		
	<SearchMovie movies={movies} 
	filterStr={filterStr} 
	filterNameByText={filterNameByText}
	filterInpHandler={filterInpHandler}/>
	</div>

      {/* <Route exact path={'/movie'} component={OneMovie}></Route> */}
	  <div className={styles.boxItems}> 
         {filteredMovies.length > 0 && filteredMovies.map(movie => (
             <Movie data={movie} key={movie.id} {...movie} />
          ))}
	 </div>

	<div className={styles.pagination}>
	<Pagination  
	defaultCurrent={1} 
	onChange={onChangePagination}
	 total={80} 
	 pageSize={10} />
	</div>
	{/* <OneMovie movies={movies} id={id}/> */}
    </>
  );

};

export const pathes = {
	main: '/',
	movie: '/movie'
  };

export const Links = () => (
	<div>
		
	<HashRouter>
    <Switch>
	<Route exact path={'/'} component={App}></Route>
	<Route path={`${pathes.movie}/:id`} component={OneMovie}></Route>

    </Switch>
  </HashRouter>
	</div>
  
	);
	
	// export const Test= () => (
	// 	<div>
	// 		Test Component
	// 	</div>
	// );
	