export const toLowerCaseAndFistUpper = string => {
  const lowerCased = string.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
  return lowerCased.charAt(0).toUpperCase() + lowerCased.substr(1);
};