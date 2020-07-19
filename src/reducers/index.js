import { combineReducers } from 'redux';
import settings, * as settingsSelectors from './settings';

const reducer = combineReducers({
    settings,
})

export default reducer;

export const getLanguage = state => settingsSelectors.getLanguage(state.settings);
export const getName = state => settingsSelectors.getName(state.settings);
export const getPhone = state => settingsSelectors.getPhone(state.settings);
export const getMail = state => settingsSelectors.getMail(state.settings);
export const getCode = state => settingsSelectors.getCode(state.settings);