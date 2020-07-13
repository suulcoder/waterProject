import * as types from '../types/settings'

export const set_language = (language) => ({
    type: types.LANGUAGE_CHANGED,
    payload: language
})