import * as filters from '../redux/types';

export const getFilterFromPath = (filter: string): string => {
  if (!filter) return filters.SHOW_ALL;

  switch (filter) {
    case 'active':
      return filters.SHOW_ACTIVE;

    case 'completed':
      return filters.SHOW_COMPLETED;

    default:
      return filters.SHOW_ALL;
  }
};
