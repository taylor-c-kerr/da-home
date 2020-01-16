<template>
  <div id="app">
    <Header/>
    <About/>
    <Footer/>
  </div>
</template>

<script>
import Header from './Header/Header.vue'
import About from './About/About.vue'
import Footer from './Footer/Footer.vue'

export default {
  name: 'app',
  components: {
    Header,
    About,
    Footer
  }
}
</script>

<style>
#app {
  margin-left: 25%;
  margin-right: 25%;
  text-align: center;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
