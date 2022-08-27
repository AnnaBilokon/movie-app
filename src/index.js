import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
// import './components/app/styles.scss'; 
import {Links} from '../components/Movie';
import {SearchMovie} from '../components/component-add-new-book/SearchMovie';
import {OneMovie} from '../components/Movie';

ReactDOM.render(
	// <Provider>
    <Links/>,
	// <OneMovie/>,
	// </Provider>,

    document.getElementById('app')
);