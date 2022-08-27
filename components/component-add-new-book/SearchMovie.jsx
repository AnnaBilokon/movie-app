import React,  {useEffect, useState}  from 'react';
import styles from '../styles.scss';

export const SearchMovie = ({
	filterStr,
	filterInpHandler
  }) => {
	const [inputText, setInputText] = useState({
		inputValue:''
	  });
	  const {inputValue} = inputText;

	 const onChangeInput = (e) => {
		console.log(e.target.value);
		filterInpHandler(e.target.value);
		setInputText({inputValue: e.target.value});
	};
	console.log(inputValue);

	// const onSubmit = e => {
	// 	const {inputValue} = inputText;
	// 	e.preventDefault();
	// 	console.log(inputValue);
	// };
	//   const addNewItem = (value) => {
	
	// console.log('e.target.value',e.target.value);
	
	//   };
	
return (
	<div className={styles.searchField}> 
	<input className={styles.inputField} value={filterStr} type='text' name='addNewItem' 
	onChange={onChangeInput} />
	<button className={styles.searchBtn}>Поиск</button>
</div>
);

  };
