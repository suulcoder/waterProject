import FAQ from '../data/FAQ';
import * as types from '../types/FAQ'
import { search, groupbyType } from '../data/modules';

const questions = (state=groupbyType(FAQ),action) => {
    switch (action.type) {
        case types.QUESTION_SEARCHED:
            return search(FAQ,'question',action.payload)
        default:
            return state;
    }
}

export default questions

export const getQuestions = state => state;
