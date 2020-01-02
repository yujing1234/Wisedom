<template>
  <div>
    <ul class="nav">
      <li>
        <router-link to="/" exact>
          <i class="iconfont">&#xe669;</i>
          <p>首页</p>
        </router-link>
      </li>
      <li>
        <router-link to="/classify">
          <i class="iconfont">&#xe61d;</i>
          <p>分类</p>
        </router-link>
      </li>
      <li>
        <router-link to="/community">
          <i class="iconfont">&#xe603;</i>
          <p>社交</p>
        </router-link>
      </li>
      <li>
        <router-link to="/mine">
          <i class="iconfont">&#xe6cb;</i>
          <p>我的</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import "./css/iconfont.css";
export default {
  name: "Nav"
};
</script>

<style lang="less" scoped>
.nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  border-top: 1px solid #e0e0e0;
  text-align: center;
  background-color: #fff;
  li {
    float: left;
    width: 25%;
    padding: 10px 0;
    line-height: 20px;
    font-size: 0.26rem;
    font-weight: bold;
    color: #e0e0e0 !important;
    a{
      color: #ccc
    }
    i {
      // color: #e0e0e0;
      font-size: 0.5rem;
    }
    // p {
    //   color: #777;
    // }
    .active {
      color: skyblue;
    }
  }
}
</style>