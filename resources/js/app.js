require('./bootstrap');
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

window.Swal = Swal;
const toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showCOnfirmButton: false,
    timer:3000,
    timeProgressBar:true
  });
  window.toast = toast;

import { createApp } from 'vue';
import App from './components/App.vue'
import router from './router'

createApp(App).use(router).mount('#app');