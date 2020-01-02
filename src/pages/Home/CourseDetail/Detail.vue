<template>
  <div>
    <!-- 头部介绍 -->
    <div class="head">
      <h3>名师精讲 Vue从入门到实战</h3>
      <p>
        已学习2260人
        <span>好评100%</span>
      </p>
      <p>
        <i class="iconfont">&#xe557;</i>999
      </p>
    </div>

    <!-- 老师介绍 -->
    <div class="teacher">
      <p>老师介绍</p>
      <div>
        <img src="../../../assets/images/Home/6.png" alt />
        <p>曾从事软件开发多年，对于web前端和服务器端有深刻的理解。前后端交互流程,NodeJS,Koa,MongoDB等服务端和数据库技术进行全栈开发；对React,Vue等各种前端主流框架有深入研究及丰富的实践。</p>
      </div>
      <div>
        <img src="../../../assets/images/Home/7.png" alt />
        <p>十余年软件开发与教学经验，曾担任上市公司技术总监，有丰富的大型团队管理经验。曾担任北邮3G计算机高级讲师、极客学院金牌布道师，课程在腾讯课堂、网易云课堂等第三方平台广泛传播。</p>
      </div>
    </div>

    <!-- 课程详情 -->
    <div class="course">
      <h2>课程详情</h2>
      <p>Vue是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。后起之秀并且也是后来者居上。是目前端最优秀的框架，也是使用率最高的框架。在课程中，我们将详细讲解如何使用vuejs，从基础到项目实战。让你体验开发的愉悦.</p>
    </div>

    <!-- 购买组件 -->
    <Buy />

  </div>
</template>

<script>
import "../../../assets/images/iconfont/Home/iconfont.css";
import Buy from "./buy";
export default {
  name: "Detail",
  components:{
      Buy
  }
};
</script>

<style lang="less" scoped>
.head {
  width: 100%;
  height: 2.5rem;
  padding: 0.2rem 0.2rem 0;
  box-sizing: border-box;
  border-bottom: 0.3rem solid rgb(226, 226, 226);
  h3 {
    font-weight: normal;
    margin-bottom: 0.2rem;
  }
  p:nth-child(2) {
    color: #888;
    font-size: 0.28rem;
    margin-bottom: 0.1rem;
    span {
      margin-left: 0.2rem;
    }
  }
  p:nth-child(3) {
    color: red;
    i {
      margin-right: 0.1rem;
    }
  }
}

.teacher {
  text-align: justify;
  color: #666;
  font-size: 0.38rem;
  margin: 0.2rem;
  div {
    margin: 0.3rem 0;
    overflow: hidden;
    img {
      float: left;
      width: 20%;
      margin-right: 0.1rem;
    }
    p {
      font-size: 0.23rem;
      // width: 70%;
    }
  }
}

.course {
  text-align: justify;
  color: #666;
  margin: 0.5rem 0.2rem;
  margin-bottom: 1rem;
  h2{
      font-size: 0.38rem;
      font-weight: normal;
      margin-bottom: 0.1rem;
  }
  P{
      font-size: 0.25rem;
  }
}
</style>