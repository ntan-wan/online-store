import { ref, reactive, shallowRef, computed, toRaw } from 'vue';
import { defineStore } from 'pinia';
import userService from '@/services/user.service';

export const useUserStore = defineStore('user', () => {
  const user = reactive({
    items: [],
  });
  const getItems = computed(() => {
    const itemArray = JSON.parse(localStorage.getItem('items'));
    if (itemArray) {
      user.items = itemArray;
    }
    return user.items;
  });

  function removeItem(itemId) {
    const filteredItems = user.items.filter((item) => {
      return item.id != itemId;
    });
    user.items = filteredItems;
    localStorage.setItem('items', JSON.stringify(user.items));
  }
  function removeItems() {
    localStorage.removeItem('items');
    user.items = [];
  }
  function addItem(itemInfo) {
    const itemArray = JSON.parse(localStorage.getItem('items'));
    if (itemArray) {
      user.items = itemArray;
    }
    user.items.push(itemInfo);
    localStorage.setItem('items', JSON.stringify(user.items));
  }
  function isDuplicateItem(itemId) {
    for (let i = 0; user.items[i]; i++) {
      if (itemId == user.items[i].id) {
        return true;
      }
    }
    return false;
  }
  async function createUser() {
    return await userService.createUser();
  }
  async function getUsers() {
    return await userService.getUsers();
  }
  async function deleteUser(userId) {
    return await userService.deleteUser(userId);
  }

  return {
    user,
    getItems,
    isDuplicateItem,
    addItem,
    removeItem,
    removeItems,
    createUser,
    getUsers,
    deleteUser,
  };
});
