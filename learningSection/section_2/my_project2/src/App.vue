<template>
  <div id="app">
    <h1> {{ title }} </h1>
    <Navbar />
    <Blogs />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Blogs from "./components/Blogs"
export default {
  name: 'app',
  components: {
    Navbar,
    Blogs
      } ,
  data () {
    return {
      title : "Hello!!!"
    }
  }
}
</script>

<style>
h1 {
  color: #444;
  text-align: center;

}
</style>
