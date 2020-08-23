import {
  addTodo,
  deleteTodo,
  editTodo,
  toggleTodo,
  completeAll,
  clearCompleted
} from '../actions';

describe('Actions', () => {
  it('should return properly', () => {
    expect(addTodo('text')).toMatchSnapshot();

    expect(deleteTodo(123)).toMatchSnapshot();

    expect(editTodo(123, 'text')).toMatchSnapshot();

    expect(toggleTodo(1, true)).toMatchSnapshot();

    expect(completeAll()).toMatchSnapshot();

    expect(clearCompleted()).toMatchSnapshot();
  });
});
