import MainLayout from '@/layouts/MainLayout.vue';
import BlankLayout from '@/layouts/BlankLayout.vue';

export function useLayouts() {
  return {
    main: MainLayout,
    blank: BlankLayout,
  };
}
