<script setup>
import { ref, onBeforeMount, watch } from 'vue';
import { useProductsStore } from '@/stores/product.store';
import router from '@/router';
import STATUSCODE from '@/constants/statusCode.constant';

/* pinia store */
const productStore = useProductsStore();

/* composables */

/* variables */
const products = ref([]);

/* lifecycle */
onBeforeMount(async () => {
  productStore.setIsLoading(true);

  let res = null;
  const selectedCategory = productStore.getSelectedCategory;
  if (selectedCategory == 'all' || !selectedCategory) {
    res = await productStore.getProducts();
  } else {
    res = await productStore.getCategory(selectedCategory);
  }

  if (res.status == STATUSCODE.OK) {
    products.value = res.data;
  } else {
  }

  productStore.setIsLoading(false);
});

/* watcher */
watch(
  () => productStore.selectedCategory,
  async (newSelectedCategory) => {
    productStore.setIsLoading(true);

    let res = null;
    if (newSelectedCategory == 'all') {
      res = await productStore.getProducts();
    } else {
      res = await productStore.getCategory(newSelectedCategory);
    }

    if (res.status == 200) {
      products.value = res.data;
    } else {
    }

    productStore.setIsLoading(false);
  }
);

/* events */
function onClickProduct(productId) {
  router.push(`/product/${productId}`);
}
</script>

<template>
  <div class="view-products">
    <div class="grid ml-0 mr-0 grid-gutter-custom">
      <template v-if="productStore.getIsLoading">
        <div v-for="i in 12" :key="i" class="col-12 sm:col-6 md:col-4 lg:col-3">
          <Card>
            <template #title>
              <Skeleton class="w-full" height="2rem" />
            </template>
            <template #content>
              <Skeleton class="w-full" height="5rem" />
            </template>
          </Card>
        </div>
      </template>

      <template v-else>
        <div
          v-for="(product, i) in products"
          :key="i"
          class="col-12 sm:col-6 md:col-4 lg:col-3"
        >
          <Card class="card-custom-product" @click="onClickProduct(product.id)">
            <template #header>
              <div class="p-3 text-center">
                <img
                  class="productImage"
                  :src="product.image"
                  width="200"
                  height="200"
                  style="object-fit: contain"
                />
              </div>
            </template>
            <template #title>
              {{ product.title }}
            </template>
            <template #content>
              <div class="flex justify-content-between">
                <span>RM {{ product.price }}</span>
                <span>Rating {{ product.rating.rate }}</span>
              </div>

              <p class="product-description">
                {{ product.description }}
              </p>
            </template>
          </Card>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">
.view-index {
  min-height: calc(100vh - $navbar-height);
}
</style>
