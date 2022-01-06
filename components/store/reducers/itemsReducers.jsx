import {createSlice} from '@reduxjs/toolkit';

const props = {
    name: 'bookItems',
    initialState: {
		inputValue: '',
		onSubmitValue:'',
		test:'test' 
    },
	reducers: {
changeInputValue: (state, action) => {
	state.inputValue = action.payload;
},
changeOnSubmitValue: (state, action) => {
	state.onSubmitValue = action.payload;
}
}
};
export const {actions, reducer} = createSlice(props);