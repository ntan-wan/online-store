import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from 'vue-router';
import { useSiteStore } from '@/stores/site.store';
import authService from '@/modules/auth/services/auth.service';
import { useCustomToast } from '@/composables/useCustomToast';

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: { name: 'signin' },
    meta: { layout: 'main' },
    component: () => import('@/views/IndexView.vue'),
  },
  {
    path: '/products',
    name: 'products',
    meta: { layout: 'main', requiresAuth: true },
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
  {
    path: '/signup',
    name: 'signup',
    meta: { layout: 'blank' },
    component: () => import('@/modules/auth/views/SignupView.vue'),
  },
  {
    path: '/signin',
    name: 'signin',
    meta: { layout: 'blank' },
    component: () => import('@/modules/auth/views/SigninView.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const { showToastError, showToastWarn, showToastSucess } = useCustomToast();

  if (to.meta.requiresAuth && !(await authService.getAuthCurrentUser())) {
    showToastError('Please Sign In');
    next({ name: 'signin' });
  } else {
    next();
  }
});
router.afterEach((to, from, next) => {
  const siteStore = useSiteStore();
  siteStore.setLayout(to.meta.layout);
});

export default router;
