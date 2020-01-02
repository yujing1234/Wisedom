<template>
  <div>
    <div class="titleBox">
      <div @click="backHandle">
        <div>
          <img src="../../assets/images/mine/images/return.png" alt />
        </div>
        <div class="me">我</div>
      </div>
      <div class="course">{{title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props:['title'],
 methods:{
    backHandle(){
      this.$router.back()
    }
  },
};
</script>

<style scoped>
.titleBox {
  background-image: url("http://www.wsgsoft.net/plds/images/big/07.jpg");
  background-size: 100%;
  overflow: hidden;
  padding: 0.4rem 0.2rem;
}
.titleBox img {
  width: 0.32rem;
  height: 0.58rem;
}
.titleBox div {
  float: left;
}
.titleBox > .course {
  color: black;
  margin-left: -0.6rem;
  font-size: 0.4rem;
  margin-left: 2rem;
}
.me{
  font-size: 0.4rem;
}
</style>