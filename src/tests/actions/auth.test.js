import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { login, logout } from '../../actions/auth';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

test('should test login action object', () => {
    const action = login('123abc');
    expect(action).toEqual({
      type: 'LOGIN',
      uid: '123abc'
    });
  });


test('should test logout action object', () => {
    const action = logout();
    expect(action).toEqual({
      type: 'LOGOUT'
    });
});
