export const getToken = tokenName => window.localStorage.getItem(tokenName);

export const saveToken = (tokenName, token) => {
  window.localStorage.setItem(tokenName, token);
};

export const deleteToken = (tokenName) => {
  window.localStorage.removeItem(tokenName);
};

export default { getToken, saveToken, deleteToken };
