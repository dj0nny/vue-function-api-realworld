const TOKEN_KEY = 'userjwt';

export const getToken = () => window.localStorage.getItem(TOKEN_KEY);

export const saveToken = (token) => {
  window.localStorage.setItem(TOKEN_KEY, token);
};

export const deleteToken = () => {
  window.localStorage.removeItem(TOKEN_KEY);
};

export default { getToken, saveToken, deleteToken };
