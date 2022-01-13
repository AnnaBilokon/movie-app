
import React,  {useEffect, useState}  from 'react';
import {useSelector} from 'react-redux';
import {BrowserRouter, Switch, Route, NavLink} from 'react-router-dom';
import {store} from './store/store.js';
import {Movie} from './Movie.jsx';
import {Pagination} from 'antd';
import 'antd/dist/antd.css';

import styles from '/components/styles.scss';
import {SearchMovie} from './component-add-new-book/SearchMovie.jsx';

const pathes = {
	app: '/',
	item: '/item'
  };
  const popular_movies = 'https://api.themoviedb.org/3/movie/popular?api_key=9b47375a58b820da3e1293213c50ac24&language=en-US&page=';
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
			  setMovie(data.results);
			  console.log(data.results);
			  
			});
			console.log('2',paginationValue);
		  return () => {};
		},[paginationValue]);

//   const {arr} = movie;
//   if (!arr) {
//     return (
//       <div>
//         Loading Loading
//       </div>
//     );
//   }
// const [paginationValue, setPaginationValue] = useState();
// const onChangePagination = (current) => {
//     console.log(current);
//     setPaginationValue(current);
//   };

const {title, poster_path, overview, genre_ids, vote_average} = movies;
return (
    <> 
	<SearchMovie/>
     <div className={styles.boxItems}> 
         {movies.length > 0 && movies.map(movie => (
             <Movie data={movie} key={movie.id} {...movie} />
          ))}
		
    </div>
	<Pagination className={styles.pagination} 
	defaultCurrent={1} 
	onChange={onChangePagination}
	 total={80} 
	 pageSize={10} />
    </>
  );

};