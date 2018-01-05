

//TEXT_FILTER
export const setTextFilter = (text = '') => ({
    type: 'TEXT_FILTER',
    text
});

//SHORT_BY_AMOUNT
export const shortByAmount = () => ({
    type: 'SHORT_BY_AMOUNT'
});

//SHORT_BY_DATE
export const shortByDate = () => ({
    type: 'SHORT_BY_DATE'
});

//SET_START_DATE
export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

//SET_END_DATE
export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});