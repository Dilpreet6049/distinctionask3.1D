<template>
<div class="nav">
  <input type="checkbox" id="nav-check">
  <div class="nav-header">
    <div class="nav-title">
      WEBTECH
    </div>
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div class="nav-links">
    <router-link to="/">Home</router-link>
    <router-link to="/About">About Us</router-link>
    <router-link to="/Contact">Contact Us</router-link>
    <!--a id="link" href="#" >Login</a-->
    <button v-on:click="register()">Register</button>
  </div>
</div>
    <router-view></router-view>
  <!--InterfaceView />
  <img alt="Vue logo" src="./assets/logo.png"-->
  
  
  
</template>

<script>


export default {
  name: 'App',
   methods:{
    register(){
    alert("You Registered Succesfully");
  },
  },

 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav {
  border-radius:0px;
  height: 50px;
  width: 83rem;
  background-color:#7aa9f5;
  position: relative;
}

.nav > .nav-header {
  display: inline;
}

.nav > .nav-header > .nav-title {
  display: inline-block;
  font-size: 22px;
  color: #000000;
  padding: 10px 10px 10px 10px;
  font-weight:900;
}

.nav > .nav-btn {
  display: none;
}

.nav > .nav-links {
  display: inline;
  float: right;
  font-size: 18px;
}

.nav > .nav-links > a {
  display: inline-block;
  padding: 13px 10px 13px 10px;
  text-decoration: none;
  color: #000000;
  font-weight:700;
}
.nav > .nav-links >  #link{
    color:#4d7a68;
}

.nav > .nav-links > button{
    height:40px;
    width:80px;
    border-radius:10px;
    background-color:#70df7d;
    color:white;
}

.nav > .nav-links > a:hover {
  background-color: black;
  color:white;
}

.nav > #nav-check {
  display: none;
}

@media (max-width:600px) {
  .nav > .nav-btn {
    display: inline-block;
    position: absolute;
    right: 0px;
    top: 0px;
  }
  .nav > .nav-btn > label {
    display: inline-block;
    width: 50px;
    height: 50px;
    padding: 13px;
  }
  .nav > .nav-btn > label:hover,.nav  #nav-check:checked ~ .nav-btn > label {
    background-color: rgba(0, 0, 0, 0.3);
  }
  .nav > .nav-btn > label > span {
    display: block;
    width: 25px;
    height: 10px;
    border-top: 2px solid #eee;
  }
  .nav > .nav-links {
    position: absolute;
    display: block;
    width: 100%;
    background-color: #9ed1c7;
    height: 0px;
    transition: all 0.3s ease-in;
    overflow-y: hidden;
    top: 50px;
    left: 0px;
  }
  .nav > .nav-links > a {
    display: block;
    width: 100%;
  }
  .nav > #nav-check:not(:checked) ~ .nav-links {
    height: 0px;
  }
  .nav > #nav-check:checked ~ .nav-links {
    height: calc(100vh - 50px);
    overflow-y: auto;
  }
}
</style>