import {actions} from '../reducers/tasks';
import {store} from '../store';

export const changeInputValueAction = (str) => store.dispatch(actions.changeInputValue(str));
export const changeOnSubmitValueAction = (str) => store.dispatch(actions.changeOnSubmitValue(str));