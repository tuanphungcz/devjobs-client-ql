import Cookies from 'js-cookie';

export const AUTH_TOKEN = 'AUTH_TOKEN';

export const getStorage = (key, defaultValue = undefined) => {
  if (typeof window !== 'undefined') {
    return Cookies.get(key) ? JSON.parse(Cookies.get(key)) : defaultValue;
  }

  return defaultValue;
};

export const setStorage = (key, data) => {
  if (typeof window !== 'undefined') {
    // right now expire is set to 365 days
    return Cookies.set(key, JSON.stringify(data), { expires: 365 });
  }

  return null;
};

export const clearStorage = key => Cookies.remove(key);


export const getAuthToken = () => getStorage(AUTH_TOKEN);
export const clearAuthToken = () => clearStorage(AUTH_TOKEN);
export const setAuthToken = token => setStorage(AUTH_TOKEN, token);
