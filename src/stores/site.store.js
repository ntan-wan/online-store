import { ref, shallowRef, computed } from 'vue';
import { defineStore } from 'pinia';
import { useLayouts } from '@/composables/useLayouts';

const layouts = useLayouts();

export const useSiteStore = defineStore('site', () => {
  const layout = shallowRef(null);
  const getLayout = layout.value;
  function setLayout(newLayout) {
    layout.value = layouts[newLayout];
  }

  return { layout, getLayout, setLayout };
});
