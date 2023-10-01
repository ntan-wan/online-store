import axios from 'axios';

async function createUser(data) {
  return axios
    .post('https://fakestoreapi.com/users', data)
    .then((res) => {
      console.log('[createUser res]', res);
      return res;
    })
    .catch((err) => {
      console.log('[createUser err]', err);
      return err;
    });
}

async function getUsers() {
  return axios
    .get('https://fakestoreapi.com/users')
    .then((res) => {
      console.log('[getUsers res]', res);
      return res;
    })
    .catch((err) => {
      console.log('[getUsers err]', err);
      return err;
    });
}

async function deleteUser(userId) {
  return axios
    .delete(`https://fakestoreapi.com/users/${userId}`)
    .then((res) => {
      console.log('[deleteUser res]', res);
      return res;
    })
    .catch((err) => {
      console.log('[deleteUser err]', err);
      return err;
    });
}

export default {
  createUser,
  getUsers,
  deleteUser,
};
