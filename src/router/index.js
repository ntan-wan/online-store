import { createRouter, createWebHistory } from 'vue-router';
import { useSiteStore } from '@/stores/site.store';

const routes = [
  {
    path: '/',
    name: 'index',
    meta: { layout: 'main' },
    component: () => import('@/views/IndexView.vue'),
  },
  {
    path: '/signup',
    name: 'signup',
    meta: { layout: 'blank' },
    component: () => import('@/views/SignUpView.vue'),
  },
  {
    path: '/products',
    name: 'products',
    meta: { layout: 'main' },
    component: () => import('@/views/ProductsView.vue'),
  },
  {
    path: '/product/:productId',
    name: 'product',
    meta: { layout: 'main' },
    component: () => import('@/views/ProductView.vue'),
  },
  {
    path: '/cart',
    name: 'cart',
    meta: { layout: 'main' },
    component: () => import('@/views/CartView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach((to, from, failure) => {
  const siteStore = useSiteStore();

  siteStore.setLayout(to.meta.layout);
});

export default router;
