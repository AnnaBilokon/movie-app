import React,  {useEffect, useState}  from 'react';
import {HashRouter, Switch, Route, NavLink, useParams} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom/cjs/react-router-dom.min';
import styles from '/components/styles.scss';
const MOVIES_IMAGE = 'https://image.tmdb.org/t/p/w300';

export const pathes = {
	main: '/',
	movie: '/movie'
  };

export const Movie = ({title, poster_path, overview, genre_ids,  vote_average, id}) => 

	 (
    <div className={styles.moviePicture}>
<BrowserRouter>

<NavLink to={`${pathes.movie}/${id}`}> <img src={MOVIES_IMAGE + poster_path} alt={title}/> </NavLink>

</BrowserRouter>

      <div>
        {/* <h2 className={styles.boxItems}>{title}</h2> */}
        {/* <h2>Overview</h2> */}
		<p>{id}</p>
        {/* <p>{genre_ids}</p> */}
      </div>
    </div>
	)
; 
// export const Links = () => (
// 	<div>
// 	<HashRouter>
// 	{/* <Nav/> */}
//     <Switch>
// 	<Route exact path={'/'} component={App}></Route>
//       <Route path={'/movie'} component={OneMovie}></Route>
//     </Switch>
//   </HashRouter>
// 	</div>
  
// 	);
export const OneMovie = () => {
	const {id} = useParams();
	console.log(id);
	const [movies, setMovie] = useState([]);

	useEffect(() => {
		fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=9b47375a58b820da3e1293213c50ac24&language=en-US`)
		  .then((res) => res.json())
		  .then((data) => {
			setMovie(data);
			console.log(data);
			const genre_name = data.genres[0].name;
			const genre_name2 = data.genres[1].name;
			console.log(genre_name); // 438695
			
		  });

		return () => {};
	  },[]);

	  const {title, poster_path, overview, genre_ids, vote_average} = movies;
	return (
		<div className={styles.oneMoviePicture}>
		   <img src={MOVIES_IMAGE + poster_path} alt={title}/>
		  <div>
			<p>{title}</p>
			<p className={styles.overview}>{overview}</p>
			<p>Оценка:{vote_average}</p>
			<p>{genre_ids}</p>
		  </div>
		</div>
	);
}; 
	
