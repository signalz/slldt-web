import { fromJS } from 'immutable';
import parentPageReducer from '../reducer';

describe('parentPageReducer', () => {
  it('returns the initial state', () => {
    expect(parentPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
