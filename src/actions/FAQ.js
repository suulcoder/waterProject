import * as types from '../types/FAQ'

export const search_question = (query) => ({
    type: types.QUESTION_SEARCHED,
    payload: query
})