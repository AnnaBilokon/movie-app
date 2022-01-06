import React,  {useEffect, useState}  from 'react';

export const AddNewBook = () => {
	const [inputText, setInputText] = useState({
		inputValue:''
	  });
	  const {inputValue} = inputText;

	 const onChangeInput = (e) => {
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
	<div>
	<input type='number' name='addNewItem' onChange={onChangeInput} />
	<button >Добавить новую книгу</button>
</div>
);

  };
