import React,  {useEffect, useState}  from 'react';
import styles from '/components/styles.scss';
const img_movie = 'https://image.tmdb.org/t/p/w300';
import {Movie} from './Movie.jsx';

export const Favorites = () => {

	let arrLocalStorige = [];
		for(let i=0; i<localStorage.length; i++) {
			let key = localStorage.key(i);
			let keyLocalStorige = (`${localStorage.getItem(key)}`);
			arrLocalStorige.push(keyLocalStorige);
			console.log('arrLocalStorige',arrLocalStorige);
		  }
// const getItem = localStorage.getItem(key);
// console.log('getItem1',getItem);
let idKey;
for (let i = 0; i<arrLocalStorige.length; i++) {
idKey = arrLocalStorige[i];
console.log('idKey',idKey);
}

const [oneMovieFavorite, setOneMovieFavorite] = useState([]);

	useEffect(() => {
		fetch(`https://api.themoviedb.org/3/movie/${idKey}?api_key=9b47375a58b820da3e1293213c50ac24&language=en-U`)
		  .then((res) => res.json())
		  .then((data) => {
			setOneMovieFavorite(data);
			console.log(data);
			
		  });

		return () => {};
	  },[]);
	
const {title, poster_path, overview, genre_ids, vote_average, genre_name} = oneMovieFavorite;
	return (
		<div className={styles.oneMoviePicture}>
		<div className={styles.oneMovieBg}>
				  <div> 
	 {arrLocalStorige.length > 0 && arrLocalStorige.map(storageKey => (
		 		  <p key={storageKey.id}> 
				   <img src={img_movie + poster_path} alt={title}/>
				   </p>
		// <Favorites id={storageKey} key={storageKey.id} /> 
	  ))}

 </div>
		
		  {/* <p> 
		  <img src={img_movie + poster_path} alt={title}/>
		  </p> */}
		  <div>
			{/* <p>{title}</p> */}
			{/* <p className={styles.overview}>{overview}</p> */}
			{/* <p>Оценка:{vote_average}</p> */}
			{/* <p><Checkbox value={selectValue} onChange={checkedBox} {...label} 
icon={<FavoriteBorder />} 
checkedIcon={<Favorite />} color={'warning'}/> 
</p> */}

			{/* <p>{genre_name}</p>
			<p>{genre_name2}</p> */}
		  </div>
		</div>
		</div>

	);
};

