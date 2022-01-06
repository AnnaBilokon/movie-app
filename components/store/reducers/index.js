
import {combineReducers} from '@reduxjs/toolkit';

import {reducer as itemsReducers} from './itemsReducers';

export const reducers = combineReducers({
    itemsReducers
});