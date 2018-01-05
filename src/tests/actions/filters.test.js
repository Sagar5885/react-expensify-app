import moment from 'moment';
import {setTextFilter, shortByAmount, shortByDate, setStartDate, setEndDate} from '../../actions/filters';

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('should set text to default value for action object', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'TEXT_FILTER',
        text: ''
    });
});

test('should set text to Sagar value for action object', () => {
    const action = setTextFilter('Sagar');
    expect(action).toEqual({
        type: 'TEXT_FILTER',
        text: 'Sagar'
    });
});

test('should set short by amount for action object', () => {
    expect(shortByAmount()).toEqual({ type:'SHORT_BY_AMOUNT' });
});

test('should set short by date for action object', () => {
    expect(shortByDate()).toEqual({ type:'SHORT_BY_DATE' });
});