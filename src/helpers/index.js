import * as filters from 'redux/types';

export const getFilterFromPath = path => {
  if (!path) return false;

  switch (path) {
    case '/':
      return filters.SHOW_ALL;

    case '/active':
      return filters.SHOW_ACTIVE;

    case '/completed':
      return filters.SHOW_COMPLETED;

    default:
      return filters.SHOW_ALL;
  }
};
