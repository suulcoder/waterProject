import { combineReducers } from 'redux';
import settings, * as settingsSelectors from './settings';

const reducer = combineReducers({
    settings,
})

export default reducer;

