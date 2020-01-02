<template>
  <div id="app">
    <router-view/>
    <!-- <Nav /> -->
  </div>
</template>

<script>
import Nav from "./components/Nav/Nav";
export default {
   name:'app',
   components:{
    //  Nav
   }
};
</script>

<style lang="less">
#app{
  width:100%;
  height: 100%;
}
</style>
