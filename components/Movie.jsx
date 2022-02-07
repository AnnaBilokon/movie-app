import React,  {useEffect, useState}  from 'react';
import {HashRouter, Switch, Route, NavLink, useParams,BrowserRouter} from 'react-router-dom';
import styles from '/components/styles.scss';
const img_movie = 'https://image.tmdb.org/t/p/w300';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

const label = {inputProps: {'aria-label': 'Checkbox demo'}};

export const pathes = {
	main: '/',
	movie: '/movie'
  };

export const Movie = ({title, poster_path, overview, genre_ids, vote_average, id}) => {

		const [selectValue, setelectValue] = useState();
	
		const checkedBox = (e) => {
			console.log(e.target.checked);
			setelectValue(e.target.checked);
		};

	 return (

    <div className={styles.moviePicture}>
<BrowserRouter>
<NavLink to={`${pathes.movie}/${id}`} > 
<div className={styles.overPic}>
<img  src={img_movie + poster_path} alt={title}/> 
</div>
</NavLink>

</BrowserRouter>
      <div className={styles.blockHeart} >

        {/* Overview */}
		<p ><Checkbox value={selectValue} onChange={checkedBox} {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} color={'warning'}/> 
		 {genre_ids}</p>
      </div>
	  
    </div>
	)
; 
	 };

export const OneMovie = ({id}) => {
// const {params} = useParams();
// const movieId = params.id;
console.log('id',id);
	const [oneMovie, setOneMovie] = useState([]);

	useEffect(() => {
		fetch('https://api.themoviedb.org/3/movie/585083?api_key=9b47375a58b820da3e1293213c50ac24&language=en-U')
		  .then((res) => res.json())
		  .then((data) => {
			setOneMovie(data);
			console.log(data);
			// const genre_name = data.genres_ids[0].name;
			// const genre_name2 = data.genres[1].name;
			// console.log(genre_name); // 438695
			
		  });

		return () => {};
	  },[]);
	
	  const {title, poster_path, overview, genre_ids, vote_average, genre_name} = oneMovie;

	return (
		<div className={styles.oneMoviePicture}>
			
			{/* {id} */}
		  <p> 
		  <img src={img_movie + poster_path} alt={title}/>
		  </p>
		  <div>
			<p>{title}</p>
			<p className={styles.overview}>{overview}</p>
			<p>Оценка:{vote_average}</p>
			<p>{genre_name}</p>
		  </div>
		</div>
	);
}; 
	
