import { accessToken } from '../../token.js';

const checkResponse = response => {
  if (response.status !== 200) {
    console.log(`Error with the request! ${response.status}`);
    return;
  }
  return response.json();
};

export const getUserData = url => {
  return fetch(`${url}?access_token=${accessToken}`)
    .then(checkResponse)
    .catch(err => {
      throw new Error(`failed to get user's data: ${err}`);
    });
};
