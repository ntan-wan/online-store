<script setup>
import { ref, reactive, computed, toRaw } from 'vue';
import { useCustomToast } from '@/composables/useCustomToast';
import authService from '@/modules/auth/services/auth.service';
import router from '@/router';

/* composables */
const { showToastSuccess, showToastError } = useCustomToast();

/* variables */
const newUser = reactive({
  email: '',
  password: '',
});
const btnIsLoading = ref(false);

/* events */
async function onSubmit() {
  btnIsLoading.value = true;
  const res = await authService.signUpWithEmail(
    newUser.email,
    newUser.password
  );
  if (res.status == 'success') {
    showToastSuccess('Sign Up Successfully');
    router.push({ name: 'products' });
  } else if (res.status == 'fail') {
    showToastError(res.error);
  }
  btnIsLoading.value = false;
}
</script>

<template>
  <div class="signup-view">
    <form class="signup-form" @submit.prevent="onSubmit">
      <h1>Sign Up</h1>
      <div class="mt-3 flex flex-column gap-2">
        <label>Email</label>
        <InputText v-model="newUser.email" />
      </div>
      <div class="mt-3 flex flex-column gap-2">
        <label>Password</label>
        <Password
          class="password-custom"
          v-model="newUser.password"
          toggleMask
        />
      </div>
      <div>
        <Button
          :loading="btnIsLoading"
          class="mt-5 w-full"
          label="Submit"
          type="submit"
        />
      </div>
    </form>
  </div>
</template>

<style scoped lang="scss">
.signup-view {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.signup-form {
  border: 1px solid rgb(234, 230, 230);
  width: 100%;
  max-width: 30rem;
  border-radius: 10px;
  min-height: 30rem;
  padding: 1.5rem;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.02), 0px 0px 2px rgba(0, 0, 0, 0.05),
    0px 1px 4px rgba(0, 0, 0, 0.08);
}
</style>
