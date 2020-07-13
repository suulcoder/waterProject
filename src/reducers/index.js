import { combineReducers } from 'redux';
import settings, * as settingsSelectors from './settings';

const reducer = combineReducers({
    settings,
})

export default reducer;

export const getLanguage = state => settingsSelectors.getLanguage(state.settings);