import { useToast } from 'primevue/usetoast';

export function useCustomToast() {
  const toast = useToast();

  function showToastSuccess(msg) {
    toast.add({
      severity: 'success',
      summary: 'Success',
      detail: msg,
      life: 3000,
    });
  }

  function showToastWarn(msg) {
    toast.add({ severity: 'warn', summary: 'Warn', detail: msg, life: 2000 });
  }

  function showToastError(msg) {
    toast.add({ severity: 'error', summary: 'Error', detail: msg, life: 2000 });
  }

  return { showToastSuccess, showToastError, showToastWarn };
}
