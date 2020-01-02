<template>
  <div>
    <!-- 头部 -->
    <div class="head">
      <span>
        <i class="iconfont">&#xe645;</i>
        视频({{videoList.length}})
      </span>
      <span>
        <i class="iconfont">&#xe79f;</i>
        资料({{videoList.length}})
      </span>
    </div>

    <!-- 视屏列表 -->
    <ul class="videoList" v-if="videoList.length>0">
      <li v-for="(item,index) in videoList" :key="index">
        <div class="videonumber">{{index>=9?index+1:"0"+(index+1)}}</div>
        <div class="videoinfo">
            <!-- 箭头 -->
            <span class="jiantou2" @click="hidden(index)" v-if="flag == index"></span>
            <span class="jiantou" @click="hidden(index)"  v-else ></span>
          <p>{{item.courseName}}</p>
          <div class="hidden" v-show="flag == index">
            <i class="iconfont">&#xe79f;</i>
            <span>{{item.information}}</span>
          </div>
        </div>
      </li>
    </ul>
    <div v-else>数据正在加载中。。。。。。</div>

    <!-- 购买组件 -->
    <buy />


  </div>
</template>

<script>
import "../../../assets/images/iconfont/Home/iconfont.css";
import Buy from "./buy";
export default {
  name: "Catalog",
  components: {
    Buy
  },
  data() {
    return {
      videoList: [],
      flag:0
    };
  },
  mounted() {
    this.axios.get(this.$api.baseUrl + this.$api.homevideo).then(data => {
      console.log(data);
      this.videoList = data.data.vedioData.videoList;
    });
  },
  methods: {
      //箭头点击隐藏
      hidden(index){
          this.flag = index;
        //   console.log(this.$refs.jiantou[index])
        //   this.$refs.jiantou[index].style.cssText = "transform: rotate(45deg);";
      }
  },
};
</script>

<style lang="less" scoped>
.head {
  height: 80px;
  padding: 0.35rem 0.2rem;
  box-sizing: border-box;
  border-bottom: 0.3rem solid #ccc;
  span {
    color: #666;
    font-size: 0.32rem;
    margin-left: 0.35rem;
    i {
      color: rgb(62, 179, 253);
      font-size: 0.6rem;
      margin-right: 0.1rem;
      position: relative;
      top: 0.1rem;
    }
  }
}

.videoList {
  padding: 0.2rem 0 0 0.2rem;
  margin-bottom:1rem;
  li {
    overflow: hidden;
    // height: 1.2rem;
    margin: 0.2rem 0;
    position: relative;
    .videonumber {
      float: left;
      color: #888;
      font-size: 0.45rem;
      width: 10%;
    }
    .videoinfo {
      float: left;
      width: 80%;
      color: #333;
      border-bottom: 1px solid #ccc;
      p {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 0.2rem;
      }
      .hidden {
        color: #666;
        font-size: 0.28rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 0.1rem;
        i {
          color: rgb(62, 179, 253);
          font-size: 0.5rem;
          margin: 0 0.1rem;
          position: relative;
          top: 0.05rem;
        }
      }
    }
  }
}

.jiantou{
    width: 0.2rem;
    height: 0.2rem;
    border-top: 2px solid #ccc;
    border-left: 2px solid #ccc;
    position: absolute;
    right: 0.3rem;
    top: 0.15rem;
    transform: rotate(-135deg);
}
.jiantou2{
    width: 0.2rem;
    height: 0.2rem;
    border-top: 2px solid #ccc;
    border-left: 2px solid #ccc;
    position: absolute;
    right: 0.3rem;
    top: 0.15rem;
    transform: rotate(45deg);
}
</style>