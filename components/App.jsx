
import React,  {useEffect, useState}  from 'react';
import {useSelector} from 'react-redux';
import {BrowserRouter, Switch, Route, NavLink} from 'react-router-dom';
import {ItemList} from './component-itemsList/ItemList.jsx';
import {Item} from './component-item/Item';
import {store} from './store/store.js';

const pathes = {
	app: '/',
	item: '/item'
  };
  
export const App = () => {

	const [inputText, setInputText] = useState({
		inputValue: '',
		onSubmitValue:'',
		test:'test'
	  });

	  const {inputValue} = inputText;
	//   const {inputValue} = useSelector((state) => state.itemsReducers);

 const onChangeInput = (e) => {
// changeInputValueAction(e.target.value);
 setInputText((prev) => ({
	...prev,
	inputValue: e.target.value
  }));
};

const onSubmit = () => {
const {inputValue} = inputText;
console.log('onSubmit', inputValue); 
setInputText((prev) => ({
	...prev,
	onSubmitValue: inputValue
  }));

};
const {onSubmitValue} = inputText;
console.log('onSubmitValue',onSubmitValue);

		const [data, setData] = useState({
			arr:null
		  });
		useEffect(() => {
			const {onSubmitValue} = inputText;
		  fetch('https://api.themoviedb.org/3/movie/popular?api_key=9b47375a58b820da3e1293213c50ac24&language=en-US&page=1')
			.then((res) => res.json())
			.then((result) => {
			//   const authors = result.items[0].volumeInfo.authors.toString();
			//   const title = result.items[0].volumeInfo.title.toString();
			//   const image = result.items[0].volumeInfo.imageLinks.thumbnail;
			  setData((prev) => ({
				...prev,
				arr: [
					// {
					// 	image:image,
					// 	authors: authors,
					// 	title: title
					// }
					
				]
			  }));
			});
		  return () => {};
		}, [onSubmitValue]);

		// const [data2, setData2] = useState({
		// 	arr2:null
		//   });
		// useEffect((inputValue) => {
		// 	console.log(inputValue);
		// 	const isbn = '9785389137530';
		//   fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)
		// 	.then((res) => res.json())
		// 	.then((result) => {
		// 	  const authors = result.items[0].volumeInfo.authors.toString();
		// 	  const title = result.items[0].volumeInfo.title.toString();
		// 	  const image = result.items[0].volumeInfo.imageLinks.thumbnail;
		// 	  setData2((prev) => ({
		// 		...prev,
		// 		arr2: [
		// 			{
		// 				image:image,
		// 				authors: authors,
		// 				title: title
		// 			}
		// 		]
		// 	  }));
		// 	});
		//   return () => {};
		// }, []);

  const {arr} = data;
//   const {arr2} = data2;
  const {test} = inputText;
  if (!arr) {
    return (
      <div>
        Loading Loading
      </div>
    );
  }
  
	// const description = data.items[0].volumeInfo.description.toString();
	// const image = data.items[0].volumeInfo.imageLinks.thumbnail;

  console.log('arr из App', arr);
  
  localStorage.setItem('test', arr);
  console.log(localStorage.getItem('test'));

<BrowserRouter>
<Nav />
<Switch>
<Route exact path={pathes.item} component={Item}></Route>
{/* <NavLink to={pathes.item}>
Item
  </NavLink> */}
</Switch>
</BrowserRouter>;
console.log('test2', test); 
	 return (
<div>

	<input type='number' 
	name='addNewItem' 
	onChange={onChangeInput} 
	value={inputValue}/>
	<button onClick={onSubmit}>Add</button>
	<p>{inputValue}</p>
	<ItemList arr={arr} arr2={arr2}/>
	{/* <Item test={test}/> */}
</div>
	 );
};

export const Nav = () => (
	<div>
	  <NavLink to={pathes.item}>
	Item
	  </NavLink>
	  </div>
	  );

// export const Router = () => {
	
// };
