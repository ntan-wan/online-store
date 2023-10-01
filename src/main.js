import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import router from '@/router';
import { createPinia } from 'pinia';
import { Vue3Mq } from 'vue3-mq';
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from 'firebase/app';

import Menubar from 'primevue/menubar';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import ProgressSpinner from 'primevue/progressspinner';
import Skeleton from 'primevue/skeleton';
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import InputText from 'primevue/inputtext';
import Panel from 'primevue/panel';
import Password from 'primevue/password';
import InputNumber from 'primevue/inputnumber';
import DataView from 'primevue/dataview';
import Rating from 'primevue/rating';
import Image from 'primevue/image';
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions'; // optional
import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup'; //Optional for grouping
import Menu from 'primevue/menu';

//Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDyAoGguAt3YJcrwlV1Lvyr6YHQpc6b1bM',
  authDomain: 'online-store-85d7f.firebaseapp.com',
  projectId: 'online-store-85d7f',
  storageBucket: 'online-store-85d7f.appspot.com',
  messagingSenderId: '1043326256029',
  appId: '1:1043326256029:web:9fe553b64f4ef6c59ee574',
};

initializeApp(firebaseConfig);
const pinia = createPinia();
const app = createApp(App);

app.use(ToastService);
app.use(pinia);
app.use(router);
app.use(PrimeVue, {
  ripple: true,
});

app.component('Menubar', Menubar);
app.component('Button', Button);
app.component('Card', Card);
app.component('Toast', Toast);
app.component('Skeleton', Skeleton);
app.component('Splitter', Splitter);
app.component('SplitterPanel', SplitterPanel);
app.component('InputText', InputText);
app.component('Panel', Panel);
app.component('Password', Password);
app.component('InputNumber', InputNumber);
app.component('DataView', DataView);
app.component('Rating', Rating);
app.component('Image', Image);
app.component('Avatar', Avatar);
app.component('Menu', Menu);
app.use(Vue3Mq, {
  preset: 'bootstrap5',
});

app.mount('#app');
