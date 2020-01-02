<template>
  <div>
    <div class="buy">
      <i class="iconfont">&#xe630;</i>
      <span>咨询</span>
      <button>立即购买</button>
    </div>
  </div>
</template>

<script>
import "../../../../assets/images/iconfont/Home/iconfont.css";
export default {
  name: "buy"
};
</script>

<style lang="less" scoped>
.buy{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background-color: #fff;
    padding:0 0.2rem;
    border-top: 1px solid #e0e0e0;
    box-sizing: border-box;
    font-size: 0.38rem;
    i{  
        display: inline-block;
        color: skyblue;
        font-size: 0.6rem;
        margin-top: 0.28rem;
    }
    span{
        margin-left: 0.2rem;
        color: rgb(79,143,226);
        font-size: 0.32rem;
        position: relative;
        top: -0.1rem;
    }
    button{
        float: right;
        color: #fff;
        background-color: rgb(79,143,226);
        width: 30%;
        height: 50px;
    }
}
</style>