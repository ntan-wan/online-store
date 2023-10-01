<script setup>
import { ref, reactive } from 'vue';
import { useCustomToast } from '@/composables/useCustomToast';
import authService from '@/modules/auth/services/auth.service';
import router from '@/router';

/* composables */
const { showToastSuccess, showToastError } = useCustomToast();

/* variables */
const signinUser = reactive({
  email: '',
  password: '',
});
const btnIsLoading = ref(false);

/* events */
async function onSubmit() {
  btnIsLoading.value = true;
  const res = await authService.signInWithEmail(
    signinUser.email,
    signinUser.password
  );
  if (res.status == 'success') {
    showToastSuccess('Sign In Successfully');
    router.push({ name: 'products' });
  } else if (res.status == 'fail') {
    showToastError(res.error);
  }
  btnIsLoading.value = false;
}
</script>

<template>
  <div class="signin-view">
    <form class="signin-form" @submit.prevent="onSubmit">
      <h1>Sign In</h1>
      <div class="mt-3 flex flex-column gap-2">
        <label>Email</label>
        <InputText v-model="signinUser.email" />
      </div>
      <div class="mt-3 flex flex-column gap-2">
        <label>Password</label>
        <Password
          class="password-custom"
          v-model="signinUser.password"
          toggleMask
        />
      </div>
      <div class="mt-3">
        <router-link to="/signup">Don't have an account?</router-link>
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
.signin-view {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.signin-form {
  border: 1px solid rgb(234, 230, 230);
  width: 100%;
  max-width: 30rem;
  min-height: 30rem;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.02), 0px 0px 2px rgba(0, 0, 0, 0.05),
    0px 1px 4px rgba(0, 0, 0, 0.08);
}
</style>
