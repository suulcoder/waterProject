import * as types from '../types/settings'

export const set_language = (language) => ({
    type: types.LANGUAGE_CHANGED,
    payload: language
})

export const set_name = (name) => ({
    type: types.NAME_SETTED,
    payload: name
})

export const set_phone = (phone) => ({
    type: types.PHONE_SETTED,
    payload: phone
})

export const set_mail = (mail) => ({
    type: types.MAIL_SETTED,
    payload: mail
})

export const set_code = (code) => ({
    type: types.CODE_SETTED,
    payload: code
})

export const set_automatized_audio = (value) => ({
    type: types.AUTOMATIZED_AUDIO_SETTED,
    payload: value
})