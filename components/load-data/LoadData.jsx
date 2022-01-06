import React, {useEffect, useState} from 'react';

export const LoadData = () => {
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

	if (!data) return <div>Loading...</div>;
  
	const authors = data.items[0].volumeInfo.authors.toString();
	const title = data.items[0].volumeInfo.title.toString();
	const description = data.items[0].volumeInfo.description.toString();
	const image = data.items[0].volumeInfo.imageLinks.thumbnail;

const arr = [
	{
		Автор: authors,
		Название: title
	  }
];

console.log(arr);
};