import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
// import './components/app/styles.scss'; 
import {App, Links} from '../components/App';
import {SearchMovie} from '../components/component-add-new-book/SearchMovie';
import {FullInfo} from '../components/component-item/Item';
import {OneMovie} from '../components/Movie';

ReactDOM.render(
	// <Provider>
    <Links/>,
	// <OneMovie/>,
	// </Provider>,

    document.getElementById('app')
);