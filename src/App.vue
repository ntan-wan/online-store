<script setup>
import { useSiteStore } from '@/stores/site.store';

const siteStore = useSiteStore();
</script>

<template>
  <div>
    <Toast position="top-center" />
    <component :is="siteStore.layout || 'div'">
      <RouterView />
    </component>
  </div>
</template>

<style lang="scss">
/* primeflex */
@import 'primeflex/primeflex.scss';
@import 'primeflex/themes/primeone-light.scss';

/* primeicons */
@import 'primeicons/primeicons.css';

/* primevue */
@import 'primevue/resources/themes/bootstrap4-light-purple/theme.css';

/* my custom scss */
@import '@/scss/style.scss';
</style>
