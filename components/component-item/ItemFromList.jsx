import React from 'react';
import {Item} from './Item';

export const ItemFromList = (p) => {
	const {
	image,
	authors,
	title
	
	} = p;

	return (
		<div>
		<div>
	 <img src={image} alt='picture'></img>
		</div>

		<div>
		<p>Автор: {authors} </p>
		  <p>Название: {title}</p>
		  <p>Статус: </p>
		  <p>Жанр: </p>
		</div>

		</div>
	  );

};