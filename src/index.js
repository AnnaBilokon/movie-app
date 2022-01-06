import React from 'react';
import ReactDOM from 'react-dom';
// import './components/app/styles.scss'; 
import {Item} from '../components/component-item/Item';
import {App} from '../components/App';
import {AddNewBook} from '../components/component-add-new-book/AddNewBook';
import {Provider} from 'react-redux';

ReactDOM.render(
	// <Provider>

	// </Provider>,
    <App/>,
	// <AddNewBook/>,
    document.getElementById('app')
);