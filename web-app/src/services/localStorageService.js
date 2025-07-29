export const KEY_TOKEN = 'accessToken';

export const getToken = () => {
  return localStorage.getItem(KEY_TOKEN);
};

export const removeToken = () => {
  return localStorage.removeItem(KEY_TOKEN);
};

export const setToken = (token) => {
  localStorage.setItem(KEY_TOKEN, token);
};
