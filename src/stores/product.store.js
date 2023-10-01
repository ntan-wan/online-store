import { ref, reactive, shallowRef, computed } from 'vue';
import { defineStore } from 'pinia';
import productService from '@/services/product.service';

export const useProductsStore = defineStore('products', () => {
  /* state */
  const selectedCategory = ref(null);
  const isLoading = ref(false);

  /* getters */
  const getSelectedCategory = computed(() => selectedCategory.value);
  const getIsLoading = computed(() => isLoading.value);

  /* actions */
  async function getProducts() {
    return await productService.getProducts();
  }
  async function getProduct(productId) {
    return await productService.getProduct(productId);
  }
  async function getCategories() {
    return await productService.getCategories();
  }
  async function getCategory(category) {
    return await productService.getCategory(category);
  }
  function setSelectedCategory(category) {
    selectedCategory.value = category;
  }
  function setIsLoading(value) {
    isLoading.value = value;
  }

  return {
    isLoading,
    getIsLoading,
    selectedCategory,
    getSelectedCategory,
    getProducts,
    getProduct,
    getCategories,
    getCategory,
    setSelectedCategory,
    setIsLoading,
  };
});
