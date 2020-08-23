import todos, { initialState } from '../reducers';

const mock = [{ id: 1, text: 'text', completed: false }];

describe('Reducers', () => {
  describe('Initial State', () => {
    it('should return properly', () => {
      expect(initialState).toEqual({ todos: [] });
      expect(todos()).toBe(false);
    });
  });

  describe('ADD_TODO', () => {
    it('should return properly', () => {
      expect(todos([], { type: 'ADD_TODO', text: 'text' })).toMatchSnapshot();
      expect(todos(mock, { type: 'ADD_TODO', text: 'text' })).toMatchSnapshot();
      expect(
        todos([{ ...mock[0], id: 99 }, mock[0]], {
          type: 'ADD_TODO',
          text: 'text'
        })
      ).toMatchSnapshot();
      expect(
        todos([mock[0], { ...mock[0], id: 99 }], {
          type: 'ADD_TODO',
          text: 'text'
        })
      ).toMatchSnapshot();
    });
  });

  describe('DELETE_TODO', () => {
    it('should return properly', () => {
      expect(todos([], { type: 'DELETE_TODO', id: 1 })).toMatchSnapshot();
      expect(todos(mock, { type: 'DELETE_TODO', id: 1 })).toMatchSnapshot();
      expect(todos(mock, { type: 'DELETE_TODO', id: 2 })).toMatchSnapshot();
    });
  });

  describe('EDIT_TODO', () => {
    it('should return properly', () => {
      expect(
        todos([], { type: 'EDIT_TODO', id: 1, text: 'text' })
      ).toMatchSnapshot();
      expect(
        todos(mock, { type: 'EDIT_TODO', id: 1, text: 'texttext' })
      ).toMatchSnapshot();
      expect(
        todos(mock, { type: 'EDIT_TODO', id: 2, text: 'texttext' })
      ).toMatchSnapshot();
    });
  });

  describe('TOGGLE_TODO', () => {
    it('should return properly', () => {
      expect(todos([], { type: 'TOGGLE_TODO', id: 1 })).toMatchSnapshot();
      expect(
        todos(mock, { type: 'TOGGLE_TODO', id: 1, completed: true })
      ).toMatchSnapshot();
      expect(
        todos(mock, { type: 'TOGGLE_TODO', id: 1, completed: false })
      ).toMatchSnapshot();
      expect(
        todos(mock, { type: 'TOGGLE_TODO', id: 2, completed: false })
      ).toMatchSnapshot();
    });
  });

  describe('COMPLETE_ALL', () => {
    it('should return properly', () => {
      expect(todos([], { type: 'COMPLETE_ALL' })).toMatchSnapshot();
      expect(todos(mock, { type: 'COMPLETE_ALL' })).toMatchSnapshot();
      expect(
        todos(
          [
            {
              completed: true,
              id: 1,
              text: 'text'
            },
            {
              completed: false,
              id: 2,
              text: 'text'
            }
          ],
          { type: 'COMPLETE_ALL' }
        )
      ).toMatchSnapshot();
    });
  });

  describe('CLEAR_COMPLETED', () => {
    it('should return properly', () => {
      expect(todos([], { type: 'CLEAR_COMPLETED' })).toMatchSnapshot();
      expect(
        todos(
          [
            {
              completed: true,
              id: 1,
              text: 'text'
            },
            {
              completed: false,
              id: 2,
              text: 'text'
            }
          ],
          { type: 'CLEAR_COMPLETED' }
        )
      ).toMatchSnapshot();
      expect(
        todos(
          [
            {
              completed: false,
              id: 2,
              text: 'text'
            }
          ],
          { type: 'CLEAR_COMPLETED' }
        )
      ).toMatchSnapshot();
    });
  });
});
