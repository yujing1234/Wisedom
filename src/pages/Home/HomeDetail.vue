<template>
  <div>
    <!-- head部分 -->
    <Head bgcolor="white" />
    <div class="btn" @click="$router.replace('/')">分享</div>
    <!-- 头像部分 -->
    <div class="user">
      <img :src="detailList.titlepic" alt />
      <span>{{detailList.uname}}</span>
    </div>

    <!-- 课程介绍 -->
    <div class="course">
      <p>{{detailList.courseinfo}}</p>
    </div>

    <!-- 课程图片 -->
    <img :src="detailList.courseimg" alt class="img" />

    <!-- 底部交互区 -->
    <div class="footer">
      <input type="text" placeholder="评论" />
      <div>
        <i class="iconfont">&#xe505;</i>
        <span>点赞</span>
      </div>
      <div>
        <i class="iconfont">&#xe603;</i>
        <span>收藏</span>
      </div>
    </div>
  </div>
</template>

<script>
import Head from "../../components/Head";
import "../../assets/images/iconfont/Home/iconfont.css";
export default {
  name: "HomeDetail",
  components: {
    Head
  },
  data() {
    return {
      detailList: {}
    };
  },
  mounted() {
    this.axios
      .get(this.$api.baseUrl + this.$api.homedetail, {
        params: {
          id: this.$route.params.id
        }
      })
      .then(data => {
        console.log(data);
        this.detailList = data.data.resData[0];
      });

    console.log(this.$route.params.id);
  }
};
</script>

<style lang="less" scoped>
.btn {
  position: fixed;
  top: 0.3rem;
  right: 0.35rem;
  padding: 0.1rem 0.2rem;
  background: rgb(54, 193, 248);
  border-radius: 0.35rem;
  color: #fff;
  font-size: 0.22rem;
}
.user {
  width: 100%;
  height: 2rem;
  padding: 0.5rem 0.35rem;
  box-sizing: border-box;
  img {
    border-radius: 50%;
    float: left;
    margin-right: 0.3rem;
  }
  span {
    position: relative;
    top: 0.2rem;
  }
}

.course {
  padding: 0 0.3rem;
  margin: 1rem 0;
}

.img {
  width: 100%;
}

.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 1.5rem;
  background-color: rgb(62, 179, 253);
  padding: 0.5rem;
  box-sizing: border-box;
  input{
      width: 55%;
      height: 0.5rem;
      border-radius: 0.3rem;
      text-align: center;
      font-size: 0.26rem;
  }
  div {
    float: right;
    color: #fff;
    i{
        margin-right: 0.1rem;
    }
    
  }
  div:nth-child(3) {
    margin-right: 0.3rem;
    i{
        color: red;
    }
  }
}
</style>