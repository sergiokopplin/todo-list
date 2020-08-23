import { getFilterFromPath } from '../../helpers';

describe('Helpers', () => {
  describe('getFilterFromPath()', () => {
    it('should return properly', () => {
      expect(getFilterFromPath()).toBe(false);
      expect(getFilterFromPath('/')).toBe('show_all');
      expect(getFilterFromPath('/active')).toBe('show_active');
      expect(getFilterFromPath('/completed')).toBe('show_completed');
      expect(getFilterFromPath('/other')).toBe('show_all');
    });
  });
});
