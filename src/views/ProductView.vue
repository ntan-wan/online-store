<script setup>
import { ref, toRaw, onBeforeMount, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useProductsStore } from '@/stores/product.store';
import { useUserStore } from '@/stores/user.store';
import { useCustomToast } from '@/composables/useCustomtoast';
import STATUSCODE from '@/constants/statusCode.constant';
import { useMq } from 'vue3-mq';

/* store */
const productStore = useProductsStore();
const userStore = useUserStore();

/* composables */
const { showToastSuccess, showToastError } = useCustomToast();
const mq = useMq();

/* route */
const route = useRoute();

/* variables */
const product = ref(null);
const quantity = ref(1);
const isDuplicateItem = ref(false);
const splitterLayout = computed(() => {
  if (mq.current == 'xs' || mq.current == 'sm') {
    return 'vertical';
  } else {
    return 'horizontal';
  }
});

/* lifecycle */
onBeforeMount(async () => {
  const productId = route.params.productId;
  const res = await productStore.getProduct(productId);
  if (res.status == STATUSCODE.OK) {
    product.value = res.data;
  } else {
  }
});

/* events */
function onclickAdd(product) {
  isDuplicateItem.value = userStore.isDuplicateItem(product.id);
  if (!isDuplicateItem.value) {
    userStore.addItem(product);
    showToastSuccess('Item added successfully!');
  }
  console.log('[onclickAdd]', toRaw(userStore.getItems));
}
</script>

<template>
  <div class="view-product">
    <Splitter :layout="splitterLayout">
      <SplitterPanel class="splitter-panel-custom">
        <Skeleton v-if="!product" height="10rem" />
        <Image
          v-else
          preview
          :src="product.image"
          width="300"
          height="300"
          :imageStyle="{ objectFit: 'contain' }"
        />
      </SplitterPanel>

      <SplitterPanel class="splitter-panel-custom">
        <div v-if="!product" class="w-full flex flex-column gap-3">
          <Skeleton height="2.5rem" />
          <Skeleton class="" height="2.5rem" />
          <Skeleton class="" height="2.5rem" />
        </div>
        <div v-else>
          <h1>{{ product.title }}</h1>
          <div class="mt-4 flex justify-content-between">
            <div>RM {{ product.price }}</div>
            <Rating
              v-model="product.rating.rate"
              readonly
              :cancel="false"
            ></Rating>
          </div>
          <p class="text-justify">
            {{ product.description }}
          </p>
          <div class="mt-5 flex flex-column sm:flex-row gap-5">
            <InputNumber
              v-model="quantity"
              class="inputnumber-custom-product"
              inputId="horizontal-buttons"
              showButtons
              buttonLayout="horizontal"
              :step="1"
              incrementButtonIcon="pi pi-plus"
              decrementButtonIcon="pi pi-minus"
              :min="1"
            />
            <Button
              label="Add to Cart"
              v-if="!userStore.isDuplicateItem(product.id)"
              @click="onclickAdd(product)"
            />
          </div>
        </div>
      </SplitterPanel>
    </Splitter>
  </div>
</template>
