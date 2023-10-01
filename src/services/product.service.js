import axios from 'axios';

async function getProducts() {
  return axios
    .get('https://fakestoreapi.com/products')
    .then((res) => {
      console.log('[getProducts res]', res);
      return res;
    })
    .catch((err) => {
      console.log('[getProducts err]', err);
      return err;
    });
}

async function getProduct(productId) {
  return axios
    .get(`https://fakestoreapi.com/products/${productId}`)
    .then((res) => {
      console.log('[getProduct res]', res);
      return res;
    })
    .catch((err) => {
      console.log('[getProduct err]', err);
      return err;
    });
}

async function getCategories() {
  return axios
    .get('https://fakestoreapi.com/products/categories')
    .then((res) => {
      console.log('[getCategories res]', res);
      return res;
    })
    .catch((err) => {
      console.log('[getCategories err]', err);
      return err;
    });
}

async function getCategory(category) {
  return axios
    .get(`https://fakestoreapi.com/products/category/${category}`)
    .then((res) => {
      console.log('[getCategory res]', res);
      return res;
    })
    .catch((err) => {
      console.log('[getCategory err]', err);
      return err;
    });
}

export default {
  getProducts,
  getProduct,
  getCategories,
  getCategory,
};
