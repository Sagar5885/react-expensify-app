import moment from 'moment';

const fileterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
}

export default (state = fileterReducerDefaultState, action) => {
    switch (action.type) {
        case 'TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SHORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SHORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
}
