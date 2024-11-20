<template>
  <div class="main-container"> <!-- este primer DIV en pocas palabras lo que hace es directamente que continen absolutamente todos los elementos de la pagina web, que abarca desde el navbar, hasta el body, y concluyendo con el footer-->
    <nav class="navigation"> <!--Indica el inicio de el navbar, el cual nos permitira desplzarnos dentro de nuestra pagina web, ademas se encuentra estructurado de forma que cada uno de las secciones, las cuales son las que tenemos creadas y son llamadas para funcionar dentro de otro componente-->
      <div class="nav-links">
        <router-link to="/" class="nav-link" active-class="active">
          Home
        </router-link>
        <router-link to="/Feed" class="nav-link" active-class="active">
          Feed
        </router-link>
        <router-link to="/Register" class="nav-link" active-class="active">
          Register
        </router-link>
        <router-link to="/SignIn" class="nav-link" active-class="active">
          Sign In
        </router-link>
        <button @click="handleSignOut" v-if="isLoggedIn"> Sign out</button>
      </div>
    </nav>
    <!--Aqui lo que se esta haciendo por asi decirlo invocar un framework el cual cuenta con la estructura que se necesita para un login, lo cual nos ahorra mucho tiempo a la hora de desarrollar nuestra pagina web -->
    <main class="content">
      <router-view />
    </main>
    <!-- Este indica en donde comienza el footer el cual lo que hace es guardar entre comillas informacion como los enlaces rapidos de movilidad e inclusive informacion propia-->
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>About Us</h3>
          <p>Esta es una pagina web creada por Juan Sanchez, con el unico proposito de aprednde los temas correspondiente de la materia WEB APPLICATIONS, asi como tambien el divertirse en el proceso gracias a nuestro profesor.</p>
        </div>

        <div class="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/feed">Feed</router-link></li>
            <li><router-link to="/register">Register</router-link></li>
            <li><router-link to="/sign-in">Login</router-link></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Contact</h3>
          <ul>
            <li><b>Email: </b> juanjozzz@outlook.com</li>
            <li><b>Phone: </b> (+52) 984 256 5810</li>
            <li><b>Address: </b> Playa del Carmen, Quintana Roo</li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const router = useRouter();
const isLoggedIn = ref(false);

let auth;

onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/");
  });
};
</script>

<style>
/* Estilos globales de la página web */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #ffffff;
}

#app {
  font-family: 'Poppins', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #e4e5e6;
  min-height: 100vh;
}

/* Estilos del contenedor principal */
.main-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Estilos del componente de navegación */
.navigation {
  background-color: #12005c;
  padding: 1rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}
/*Crea un estilo para el boton de sign out */
button {
  border-radius: 5px;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

button:hover {
  background-color: #d4d3cd;
}

/* Estilos del contenedor de enlaces de navegación */
.nav-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Estilos de los enlaces de navegación */
.nav-link {
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  position: relative;
}

/* Estilos del enlace de navegación cuando está activo */
.nav-link.active {
  color: #ffc70f;
  background-color: rgba(52, 152, 219, 0.1);
}

/* Estilos del enlace de navegación cuando se pasa el mouse por encima */
.nav-link:hover {
  color: #ffc70f;
  background-color: rgba(52, 152, 219, 0.1);
}

/* Estilos del enlace de navegación cuando se hace clic */
.nav-link:active {
  color: #ffc70f;
  background-color: rgba(52, 152, 219, 0.1);
}

/* Estilos del enlace de navegación cuando se presiona */
.nav-link:focus {
  color: #ffc70f;
  background-color: rgba(52, 152, 219, 0.1);
}

/* Estilos del componente de contenido */
.content {
  margin-top: 80px;
  padding: 2rem;
  flex-grow: 1;
}

/* Estilos del componente de pie de página */
.footer {
  background-color: #12005c;
  color: #ffffff;
  padding-top: 3rem;
  margin-top: auto;
}

/* Estilos del contenedor del pie de página */
.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 0 2rem;
}

/* Estilos de la sección del pie de página */
.footer-section {
  margin-bottom: 2rem;
}

/* Estilos del encabezado de la sección del pie de página */
.footer-section h3 {
  color: #fff;
  font-weight: 600;
  margin-bottom: 20px;
  position: relative;
  display: inline-block;
}

/* Estilos del encabezado de la sección del pie de página cuando se pasa el mouse por encima */
.footer-section h3::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -5px;
  width: 50px;
  height: 2px;
  background-color: #ffe100;
  transition: width 0.3s ease;
}

.footer-section h3:hover::after {
  width: 100%;
}

/* Estilos de la lista de la sección del pie de página */
.footer-section ul {
  list-style: none;
}

/* Estilos de los elementos de la lista de la sección del pie de página */
.footer-section ul li {
  margin-bottom: 0.5rem;
}

/* Estilos del enlace de la sección del pie de página */
.footer-section a {
  color: #ffffff;
  text-decoration: none;
  transition: color 0.3s ease;
}

/* Estilos del enlace de la sección del pie de página cuando se pasa el mouse por encima */
.footer-section a:hover {
  color: #ffe100;
}

/* Estilos del pie de página que contiene información sobre derechos de autor */
.footer-bottom {
  background: #000000;
  padding: 1rem;
  text-align: center;
  margin-top: 2rem;
}

/* Estilos del texto del pie de página que contiene información sobre derechos de autor */
.footer-bottom p {
  font-size: 0.9rem;
  color: #fff;
}

/* Estilos de la página web para dispositivos móviles */
@media (max-width: 768px) {
  .nav-links {
    gap: 1rem;
  }

  .nav-link {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }

  .footer-content {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Estilos de la página web para dispositivos pequeños */
@media (max-width: 480px) {
  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
  }

  .navigation {
    padding: 0.5rem;
  }

  .content {
    margin-top: 120px;
  }

  .footer-content {
    grid-template-columns: 1fr;
  }

  .footer-section {
    text-align: center;
  }
}
</style>