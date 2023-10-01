<script setup>
import { ref, reactive, onBeforeMount } from 'vue';
import { useUserStore } from '@/stores/user.store';
import { useCustomToast } from '@/composables/useCustomtoast';
import STATUSCODE from '@/constants/statusCode.constant';

/* stores */
const userStore = useUserStore();

/* composables */
const { showToastSuccess, showToastError } = useCustomToast();

/* variables */
const userInfo = reactive({
  email: '',
  username: '',
  password: '',
  name: {
    firstname: '',
    lastname: '',
  },
  address: {
    city: '',
    street: '',
    number: null,
    zipcode: '',
    geolocation: {
      lat: '',
      long: '',
    },
  },
  phone: '',
});
const userId = ref(0);

/* events */
async function onSubmitform(userInfo) {
  const res = await userStore.createUser(userInfo);

  if (res.status == STATUSCODE.OK) {
    showToastSuccess('User created successfully!');
  } else {
    showToastError('User failed to create!');
  }
}
</script>

<template>
  <div class="signup-view">
    <form class="signup-form" @submit.prevent="onSubmitform(userInfo)">
      <h2>Sign Up</h2>
      <div class="mt-2 label-input-holder">
        <label>Email</label>
        <InputText v-model="userInfo.email" />
      </div>
      <div class="mt-3 label-input-holder">
        <label>Username</label>
        <InputText v-model="userInfo.username" />
      </div>

      <div class="mt-3 label-input-holder">
        <label>Password</label>
        <Password
          v-model="userInfo.password"
          class="password-custom"
          :feedback="false"
          toggleMask
        />
      </div>

      <div class="mt-3 label-input-holder">
        <label>City</label>
        <InputText v-model="userInfo.address.city" />
      </div>

      <div class="mt-3 label-input-holder">
        <label>Street</label>
        <InputText v-model="userInfo.address.street" />
      </div>

      <div class="mt-3 label-input-holder">
        <label>House No</label>
        <InputText v-model="userInfo.address.number" />
      </div>

      <div class="mt-3 label-input-holder">
        <label>Zipcode</label>
        <InputText v-model="userInfo.address.zipcode" />
      </div>

      <div class="mt-3 label-input-holder">
        <label>Phone No</label>
        <InputText v-model="userInfo.phone" />
      </div>

      <div class="mt-4 text-right">
        <Button label="Submit" type="submit" />
      </div>
    </form>
  </div>
</template>

<style scoped lang="scss">
.signup-view {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  .signup-form {
    border: 1px solid rgb(199, 198, 198);
    border-radius: 10px;
    padding: 1.5rem;
    width: 100%;
    max-width: 25rem;
  }

  .label-input-holder {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
