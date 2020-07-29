import { combineReducers } from 'redux';
import settings, * as settingsSelectors from './settings';
import FAQ, * as FAQSelectors from './FAQ'

const reducer = combineReducers({
    settings,
    FAQ,
})

export default reducer;

export const getLanguage = state => settingsSelectors.getLanguage(state.settings);
export const getName = state => settingsSelectors.getName(state.settings);
export const getPhone = state => settingsSelectors.getPhone(state.settings);
export const getMail = state => settingsSelectors.getMail(state.settings);
export const getCode = state => settingsSelectors.getCode(state.settings);
export const getAutomatizedAudio = state => settingsSelectors.getAutomatizedAudio(state.settings);

export const getQuestions = state => FAQSelectors.getQuestions(state.FAQ);