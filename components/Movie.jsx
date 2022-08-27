import React,  {useEffect, useState}  from 'react';
import {HashRouter, Switch, Route, NavLink, useParams,BrowserRouter} from 'react-router-dom';
import styles from '/components/styles.scss';
const img_movie = 'https://image.tmdb.org/t/p/w300';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import {App} from './App';
import {Favorites} from './Favorites';

const label = {inputProps: {'aria-label': 'Checkbox demo'}};

export const pathes = {
	main: '/',
	movie: '/movie',
	favorites:'/favorites'
  };

export const Movie = ({title, poster_path, overview, genre_ids, vote_average, id}) => {

		const [selectValue, setelectValue] = useState([]);
	
		const checkedBox = (e) => {
			console.log(e.target.checked);
			setelectValue(e.target.checked);
			localStorage.setItem(`${id}`, `${id}`);
		};
	
		// if (selectValue) {
		// 	localStorage.setItem('favorite', `${id}`);
		//  } else {
		// 	localStorage.removeItem('favorite');
		//  }

		 const [genreList, setGenreList] = useState([]);
		 useEffect(() => {
			fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=9b47375a58b820da3e1293213c50ac24&language=en-US')
			  .then((res) => res.json())
			  .then((data) => {
				// console.log(data);
				setGenreList(data.genres);
				console.log('movies genres1', data.genres);
				const genresList = data.genres;
				// console.log('genresList',genresList); // 438695
		
			  });
		
			return () => {};
		  },genreList);
		  console.log('movies genres',genreList);

		  const isGenresIds = genre_ids ? (
			genre_ids.map((itemFilmId) => {
			  const gnr = genreList.find((item) => item.id === itemFilmId);
			  return gnr;
			})
		  ) : (
			<p>error</p>
		  );
		 console.log('isGenresIds',isGenresIds);
	// const {genres} = genreList; 
		//   const genresList = data.genres;
		//   console.log('genresList',genres); // 438695
		console.log('genre_ids',genre_ids);
let genreListArr = genreList;
  
	 return (

    <div className={styles.moviePicture}>

<div className={styles.overPic}>
<NavLink to={`${pathes.movie}/${id}`} >
<img src={img_movie + poster_path} className={styles.imgHover} alt={title}/> 
</NavLink>
</div>

      <div className={styles.blockHeart} >

        {/* Overview */}
		<p><Checkbox value={selectValue} onChange={checkedBox} {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} color={'warning'}/> 
		 </p>
		 <div className={styles.genres}>
		 {!genreList.length ? (
         <div />
          ) : (
            isGenresIds.map((item) => (
                <p key={item.id}>
                  {item.name}
                </p>
              ))
          )}
        </div>
		 {/* /* <p>{genres[0].name}</p> */}
      </div>
	  
    </div>
	)
; 
	 };

export const Links = () => (
		<div>
			
		<HashRouter>
		<Switch>
		<Route exact path={'/'} component={App}></Route>
		<Route path={`${pathes.movie}/:id`} component={OneMovie}></Route>
		{/* <Route path={`${pathes.favorites}`} component={Favorites}></Route> */}
		</Switch>
	  </HashRouter>
		</div>
	  
		);
export const OneMovie = () => {
const params = useParams();
const movieId = params.id;
// console.log('id',id);
	const [oneMovie, setOneMovie] = useState([]);

	useEffect(() => {
		fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=9b47375a58b820da3e1293213c50ac24&language=en-U`)
		  .then((res) => res.json())
		  .then((data) => {
			setOneMovie(data);
			console.log(data);
			// const genre_name = data.genres[0].name;
			// const genre_name2 = data.genres[1].name;
			// console.log(genre_name); // 438695
			
		  });

		return () => {};
	  },[]);
	
	  const {title, poster_path, overview, genre_ids, vote_average, genre_name} = oneMovie;

	  const [selectValue, setelectValue] = useState();
	
	  const checkedBox = (e) => {
		  console.log(e.target.checked);
		  setelectValue(e.target.checked);
	  };
	return (
	<div className={styles.oneMovieBg}>

		<div className={styles.oneMoviePicture}>
		<NavLink to={'/'} > <button className={styles.backBtn} >
			Back
		</button> </NavLink>

		  <p> 
		  <img src={img_movie + poster_path} alt={title}/>
		  </p>
		  <div>
			<p>{title}</p>
			<p className={styles.overview}>{overview}</p>
			<p>Оценка:{vote_average}</p>
			<p><Checkbox value={selectValue} onChange={checkedBox} {...label} 
icon={<FavoriteBorder />} 
checkedIcon={<Favorite />} color={'warning'}/> 
</p>

			{/* <p>{genre_name}</p>
			<p>{genre_name2}</p> */}
		  </div>
		</div>
		</div>	
	);
}; 
	
