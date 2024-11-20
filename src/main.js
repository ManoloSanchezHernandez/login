// Importación de las funciones necesarias de Vue y el componente principal de la aplicación
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Importación de la función initializeApp del paquete firebase/app para inicializar Firebase
import { initializeApp } from "firebase/app";

// Configuración de Firebase con los detalles de tu proyecto
const firebaseConfig = {
  apiKey: "AIzaSyAEurD_MowcR12dJm2_Xw5eJGwP7rc-els",
  authDomain: "login-33175.firebaseapp.com",
  projectId: "login-33175",
  storageBucket: "login-33175.firebasestorage.app",
  messagingSenderId: "631809005085",
  appId: "1:631809005085:web:0bc5269abbdb0b0f0558f4",
  measurementId: "G-07QHG2VZH6"
};

// Inicialización de Firebase con la configuración proporcionada
initializeApp(firebaseConfig);

// Creación de una nueva instancia de la aplicación Vue
const app = createApp(App)

// Uso del enrutador para que la aplicación Vue sepa cómo manejar las rutas
app.use(router)

// Montaje de la instancia de la aplicación Vue en el elemento HTML con el ID '#app'
app.mount('#app')
