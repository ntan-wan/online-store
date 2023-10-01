<script setup>
import { ref, onBeforeMount } from 'vue';
import { useUserStore } from '@/stores/user.store';
import { useProductsStore } from '@/stores/product.store';
import { usePrimeVue } from 'primevue/config';
import router from '@/router';
import { useRoute } from 'vue-router';
import statusCode from '@/constants/statusCode.constant';

/* store */
const userStore = useUserStore();
const productStore = useProductsStore();

/* composables */
const PrimeVue = usePrimeVue();
const route = useRoute();

/* variables */
const currentTheme = ref('bootstrap4-light-purple');
const menuItems = ref([
  {
    label: 'Categories',
    icon: 'pi pi-fw pi-th-large',
    items: [],
  },
]);

/* lifecycle */
onBeforeMount(async () => {
  const res = await productStore.getCategories();
  if (res.status == statusCode.OK) {
    populateCategories(res.data);
  }
});

/* events */
function onclickLogo() {
  router.push('/products');
}
function onclickCart() {
  router.push('/cart');
}
function onToggleThemes() {
  let nextTheme = 'bootstrap4-light-blue';
  if (currentTheme.value === 'bootstrap4-light-purple')
    nextTheme = 'bootstrap4-light-blue';
  else if (currentTheme.value === 'bootstrap4-light-blue')
    nextTheme = 'bootstrap4-light-purple';
  PrimeVue.changeTheme(currentTheme.value, nextTheme, 'theme-link', () => {});
  currentTheme.value = nextTheme;
}

/* util functions */
function redirectToProductsView() {
  if (route.name !== 'products') {
    router.push('/products');
  }
}
function categoryMapping(category) {
  const categories = {
    electronics: {
      command: () => {
        productStore.setSelectedCategory('electronics');
        redirectToProductsView();
      },
    },
    jewelery: {
      command: () => {
        productStore.setSelectedCategory('jewelery');
        redirectToProductsView();
      },
    },
    "men's clothing": {
      command: () => {
        productStore.setSelectedCategory("men's clothing");
        redirectToProductsView();
      },
    },
    "women's clothing": {
      command: () => {
        productStore.setSelectedCategory("women's clothing");
        redirectToProductsView();
      },
    },
  };

  for (const name in categories) {
    if (category == name) {
      return {
        label: category,
        command: categories[name].command,
      };
    }
  }
}

function populateCategories(data) {
  const reorganizedCategoryArray = data.map((category) => {
    return categoryMapping(category);
  });
  const allProductCategory = {
    label: 'All',
    command: () => {
      productStore.setSelectedCategory('all');
      redirectToProductsView();
    },
  };
  reorganizedCategoryArray.push(allProductCategory);
  menuItems.value[0].items = reorganizedCategoryArray;
}
function getItemArrayLength() {
  return String(userStore.getItems.length);
}
</script>

<template>
  <div class="layout-main">
    <Menubar :model="menuItems" class="menubar-position">
      <template #start>
        <img
          src="@/assets/imgs/logo.png"
          width="39"
          height="39"
          class="cursor-pointer"
          style="object-fit: contain"
          @click="onclickLogo"
        />
      </template>
      <template #end>
        <Button
          type="button"
          label="Cart"
          icon="pi pi-shopping-cart"
          :badge="getItemArrayLength()"
          badgeClass="p-badge-danger"
          outlined
          @click="onclickCart"
        />
      </template>
    </Menubar>
    <div class="main-content">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.layout-main {
  .main-content {
    padding-top: calc($navbar-height + 1rem);
  }
}

.menubar-position {
  position: fixed;
  width: 100%;
  z-index: 10;
  top: 0;
}
</style>
