import store from '../store';

describe('Store', () => {
  it('should return properly', () => {
    expect(store()).toMatchSnapshot();
  });
});
