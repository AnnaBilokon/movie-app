import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Rate} from 'antd';
import './item';
import 'antd/lib/rate/style/index.css'; 
import {ItemFromList} from './ItemFromList';

export const Item = ({test}) => {
	console.log('test',test);
	// const {id} = useParams();
	const [data, setData] = useState(null);
	useEffect(() => {
		
	  fetch('https://www.googleapis.com/books/v1/volumes?q=isbn:9785457938687')
		.then((res) => res.json())
		.then((result) => {
		  console.log(result);
		  setData(result);
		});
	  return () => {};
	}, []);
  
// const onChangeYearOfBuying = (value) => {
// console.log(value);
// };

	if (!data) return <div>Loading...</div>;
  
	const authors = data.items[0].volumeInfo.authors.toString();
	console.log(authors);
	const title = data.items[0].volumeInfo.title.toString();
	const description = data.items[0].volumeInfo.description.toString();
	const image = data.items[0].volumeInfo.imageLinks.thumbnail;
	console.log(image);
const arr = 
	{
		Автор: authors,
		Название: title
		
	  }
;
const rateOnChange = (value) => {
console.log(value);
};
console.log(arr);
	return (
		<div>
			{test}
		<img src={image} alt='picture'></img>
		<br/>
		<p> {title}</p>
		<p>{authors}</p>
		<p>
<Rate allowHalf defaultValue={2.5} onChange={rateOnChange}/>
		</p>
        <p>{description}</p> 
		<p>Жанр</p>
		<p>
		Год покупки: 
<select name='select'> 
  <option value='value1' defaultValue>2021</option>
  <option value='value2' >2020</option>
  <option value='value3'>2019</option>
  <option value='value4'>2018</option>
</select>
</p>
<p>
	Стутус: 
<select name='select'> 
  <option value='прочитано' defaultValue>прочитано</option>
  <option value='непрочитано' >непрочитано</option>
  <option value='читаю'>читаю сейчас</option>
</select>
</p>
		<button >
       Добавить в избранное
      </button>
<p>
	<p>Отзыв на книгу</p>
	<textarea id='review' name='review'
          rows='5' cols='33'>

</textarea>
</p>
	  </div>
	);

  };