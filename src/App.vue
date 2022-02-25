<template>
    <v-app id="app">
      <v-main>
        <router-view></router-view>                    
      </v-main>
       <v-footer id="footer" app>
         <p>Mantido & Feito com  
           <img alt="Coração Icon" src="./assets/img/heart.png"> 
           COPYRIGHT @ 2020  
           <img alt="logo hubvet" src="./assets/img/logo-mini.png" >
           , All rigths Reserved
          </p>         
     </v-footer>
    </v-app>
</template>

<script>
import './assets/css/global.css';


export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Poppins, Helvetica, Arial, sans-serif;
  text-align: center;
  background-color: #E5E5E5;
  margin-top: 0px;
  font-size: 11px;
}

#footer {
  text-align: center;
  margin: 0 auto;
  color: #393E41;
  background-color: #E5E5E5;
  justify-content: center;
  font-size: 0.82rem;
}

#footer img{
  position: relative;
  bottom: -3px;
}
</style>
