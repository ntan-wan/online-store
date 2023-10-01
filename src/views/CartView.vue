<script setup>
import { useUserStore } from '@/stores/user.store';
import emptyCartImg from '@/assets/imgs/cartEmpty.png';

/* pinia stores */
const userStore = useUserStore();

/* util functions */
function onClickRemove(productId) {
  userStore.removeItem(productId);
}
</script>

<template>
  <div class="view-cart">
    <DataView :value="userStore.getItems">
      <template #empty>
        <div>
          <img
            class="block mx-auto"
            :src="emptyCartImg"
            width="200"
            height="200"
            style="object-fit: contain"
          />
          <h2 class="text-center">
            No items yet? Continue shopping to explore more.
          </h2>
        </div>
      </template>

      <template #list="listProps">
        <!-- {{ listProps.data }} -->
        <div class="col-12 row-custom flex flex-column sm:flex-row gap-3">
          <div class="text-center">
            <img
              width="200"
              height="200"
              :src="listProps.data.image"
              class="product-img"
              style="object-fit: contain"
            />
          </div>

          <div class="flex flex-column w-full gap-3">
            <h2 class="product-title">{{ listProps.data.title }}</h2>
            <div class="product-data flex justify-content-between">
              <div>
                <span class="">{{ listProps.data.category }}</span>
                <Rating
                  class="mt-6"
                  :model-value="listProps.data.rating.rate"
                  readonly
                  :cancel="false"
                />
              </div>

              <div class="text-right">
                <span class="">RM {{ listProps.data.price }}</span>
                <div class="mt-4">
                  <Button
                    label="Remove"
                    @click="onClickRemove(listProps.data.id)"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </DataView>
  </div>
</template>

<style scoped lang="scss">
.view-cart {
  height: 1px;
  min-height: calc(100vh - $navbar-height);
}

.row-custom {
  padding: 1rem;
}
.product-data {
  .product-title {
    max-width: 42rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
}
.product-img {
  object-fit: contain;
  border: 1px solid rgb(203, 202, 202);
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.03), 0px 0px 2px rgba(0, 0, 0, 0.06),
    0px 2px 6px rgba(0, 0, 0, 0.12);
}
</style>
