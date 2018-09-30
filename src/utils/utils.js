import { filter } from 'ramda';

export const splitStringToArray = string => {
  if (typeof string !== 'string') {
    return [];
  }
  const array = string.split(',');
  const x = array.map(s => s.trim());

  const isNotEmptyStriny = string => string !== '';
  return filter(isNotEmptyStriny, x);
};
