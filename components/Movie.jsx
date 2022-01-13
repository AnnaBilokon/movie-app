import React,  {useEffect, useState}  from 'react';
import styles from '/components/styles.scss';
const MOVIES_IMAGE = 'https://image.tmdb.org/t/p/w300';

export const Movie = ({title, poster_path, overview, genre_ids,  vote_average}) => (
    <div className={styles.moviePicture}>
      <img src={MOVIES_IMAGE + poster_path} alt={title}/>
      <div>
        {/* <h2 className={styles.boxItems}>{title}</h2> */}
        {/* <h2>Overview</h2> */}
        {/* <p>{genre_ids}</p> */}
      </div>
    </div>
  ); 