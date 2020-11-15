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

const name = (state = '', action) => {
  switch(action.type) {
    case types.NAME_SETTED: 
      return action.payload;
    default: 
      return state;
  }
};

const phone = (state = '', action) => {
  switch(action.type) {
    case types.PHONE_SETTED: 
      return action.payload;
    default: 
      return state;
  }
};

const mail = (state = '', action) => {
  switch(action.type) {
    case types.MAIL_SETTED: 
      return action.payload;
    default: 
      return state;
  }
};

const code = (state = '', action) => {
  switch(action.type) {
    case types.CODE_SETTED: 
      return action.payload;
    default: 
      return state;
  }
};

const location = (state = '', action) => {
  switch(action.type) {
    case types.LOCATION_SETTED: 
      return action.payload;
    default: 
      return state;
  }
};

const automatized_audio = (state = false, action) => {
  switch(action.type) {
    case types.AUTOMATIZED_AUDIO_SETTED: 
      return action.payload;
    default: 
      return state;
  }
}

export default combineReducers({
    language,
    name,
    phone,
    mail,
    code,
    location,
    automatized_audio
});

export const getLanguage = state => state.language;
export const getName = state => state.name;
export const getPhone = state => state.phone;
export const getMail = state => state.mail;
export const getCode = state => state.code;
export const getLocation = state => state.location;
export const getAutomatizedAudio = state => state.automatized_audio;