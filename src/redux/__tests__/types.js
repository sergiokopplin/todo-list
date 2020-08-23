// export const ADD_TODO = 'ADD_TODO';
// export const DELETE_TODO = 'DELETE_TODO';
// export const TOGGLE_TODO = 'TOGGLE_TODO';
// export const EDIT_TODO = 'EDIT_TODO';
// export const COMPLETE_ALL = 'COMPLETE_ALL';
// export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';

// export const SHOW_ALL = 'show_all';
// export const SHOW_COMPLETED = 'show_completed';
// export const SHOW_ACTIVE = 'show_active';

import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  EDIT_TODO,
  COMPLETE_ALL,
  CLEAR_COMPLETED,
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE
} from '../types';

describe('Types', () => {
  it('should return properly', () => {
    expect(ADD_TODO).toMatchSnapshot();
    expect(DELETE_TODO).toMatchSnapshot();
    expect(TOGGLE_TODO).toMatchSnapshot();
    expect(EDIT_TODO).toMatchSnapshot();
    expect(COMPLETE_ALL).toMatchSnapshot();
    expect(CLEAR_COMPLETED).toMatchSnapshot();
    expect(SHOW_ALL).toMatchSnapshot();
    expect(SHOW_COMPLETED).toMatchSnapshot();
    expect(SHOW_ACTIVE).toMatchSnapshot();
  });
});
