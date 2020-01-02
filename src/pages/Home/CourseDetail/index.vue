<template>
  <div>
    <!-- 顶部视屏 -->
    <div class="video"> 
      <video
        src="../../../assets/video/1.mp4"
        width="100%"
        height="205px"
        controls
        poster="../../../assets/images/Home/5.jpg"
        preload="none"
        ref="myvideo"
        @pause="pause"
      ></video>
      <div class="hidden" v-show="flag">
          <!-- 箭头 -->
          <h1 @click="$router.replace('/')"></h1>
          <!-- 播放 -->
          <p @click="play"><span></span></p>
      </div>
    </div>


    <!-- 二级路由 -->
    <!-- 路由导航 -->
    <ul class="routeNav">
        <li>
            <router-link :to="{name:'DetailCourse'}">详情</router-link>
        </li>
        <li>
            <router-link :to="{name:'Catalog'}">目录</router-link>
        </li>
        <li>
            <router-link :to="{name:'Correlation'}">相关课程</router-link>
        </li>
    </ul>

    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: "CourseDetail",
  data() {
      return {
          flag:true
          
      }
  },
  methods: {
      //播放事件
      play(){
          this.flag = false;
          this.$refs.myvideo.play();
      },
      //暂停事件
      pause(){
          this.flag = true;
      }
  },
};
</script>

<style lang="less" scoped>
.video {
    position: relative;
    .hidden{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 205px;
        background-color: rgba(0, 0, 0, 0.6);
        // 箭头
        h1{
            width: 0.3rem;
            height: 0.3rem;
            border-top: 2px solid rgba(255, 255, 255, .6);
            border-left: 2px solid rgba(255, 255, 255, .6);
            transform: rotate(-45deg);
            margin: 0.35rem 0 0 0.3rem;
        }
        // 播放
        p{
            width: 1rem;
            height: 1rem;
            border: 2px solid #fff;
            border-radius: 50%;
            padding: 0.15rem 0.38rem;
            box-sizing: border-box;
            position: absolute;
            top:50%;
            left: 50%;
            margin: -0.5rem 0 0 -0.5rem;
            span{
                display: block;
                border-left: 0.3rem solid #fff;
                border-top: 0.3rem solid transparent;
                border-bottom: 0.3rem solid transparent;
                border-radius: 0.1rem;
            }
        }
    }
}

.routeNav{
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-bottom: 1px solid #e0e0e0;
    li{
        float: left;
        width: 33.3%;
    }
}

.active{
    color: rgb(60,142,236);
}
</style>