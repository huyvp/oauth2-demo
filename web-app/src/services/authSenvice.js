import { removeToken } from './localStorageService';

export const logout = () => {
  removeToken();
};
