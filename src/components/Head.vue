<template>
  <div class="head">
    <div :class="bgcolors">
        <!-- 返回箭头 -->
      <div class="jiantou" @click="back"></div>
      <h2>{{title}}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Head",
  props:["title","bgcolor"],
  computed: {
    bgcolors() {
      return this.bgcolor == "blue" ? "blue" : "white";
    }
  },
  methods: {
      back(){
          this.$router.back();
      }
  },
};
</script>

<style lang="less" scoped>
.blue{
    height: 100%;
    background-color: deepskyblue;
    .jiantou{
        border-top: 2px solid #fff;
        border-left: 2px solid #fff;
    }
    h2{
        color: #fff;
    }
}
.white{
    height: 100%;
    background-color: white;
    .jiantou{
        border-top: 2px solid #000;
        border-left: 2px solid #000;
    }
    
}

.head{
    width: 100%;
    height:60px;
    line-height: 60px;
    text-align:center;
    position: relative;
    border-bottom: 1px solid #ccc;
    .jiantou{
        width: 0.25rem;
        height: 0.25rem;
        transform: rotate(-45deg);
        position: absolute;
        top:0.45rem;
        left: 0.5rem;
        }
    h2{
      font-size: 0.38rem;
        font-weight: normal;
    }
}


</style>