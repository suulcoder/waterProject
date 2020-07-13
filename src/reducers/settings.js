import * as types from '../types/settings'
import { combineReducers } from 'redux';

const language = (state = 'spanish', action) => {
    switch(action.type) {
      case types.LANGUAGE_CHANGED: 
        return action.payload;
      default: 
        return state;
    }
  };

export default combineReducers({
    language
});

export const getLanguage = state => state.language;