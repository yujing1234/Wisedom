<template>
  <div>
    <Home/>
    <Nav/>
  </div>
</template>

<script>
import Home from "./home/Home"
import Nav from "../../components/Nav/Nav"
export default {
  name: "Mine",
  components:{
    Home,
    Nav
  }
};
</script>

<style scoped>
</style>