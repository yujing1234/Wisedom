<template>
  <div>
    <!-- head部分 -->
    <Head title="每日推荐" bgcolor="white" />

    <!-- banner部分 -->
    <div class="banner">
      <img src="../../assets/images/Home/4.jpg" alt />
    </div>

    <!-- 课程列表 -->
    <ul class="courseList" v-if="courseList.length>0">
      <li v-for="(item,index) in courseList" :key="index" @click="goDetail(item.courseid)">
        <div>
          <h3>{{item.courseTitle}}</h3>
        </div>
        <img :src="item.courseimg" alt />
      </li>
    </ul>
    <div v-else>数据正在加载中。。。。。。</div>
  </div>
</template>

<script>
import Head from "../../components/Head";
export default {
  name: "HomeRecommend",
  components: {
    Head
  },
  data() {
    return {
      courseList: []
    };
  },
  mounted() {
    this.axios.get(this.$api.baseUrl + this.$api.homerecommend).then(data => {
      console.log(data);
      this.courseList = data.data.recommendData.courseList;
    });
  },
  methods: {
      //跳转详情页
      goDetail(id){
          console.log(id);

          this.$router.push("/homedetail/"+id);
      }
  },
};
</script>

<style lang="less" scoped>
.banner {
  img {
    width: 100%;
  }
}
.courseList {
  li {
    margin: 0.35rem 0.2rem;
    div {
      float: left;
      width: 55%;
      margin-right: 0.1rem;
      h3 {
        font-size: 0.3rem;
        font-weight: 500;
        font-family: "微软雅黑"
      }
    }
  }
}
</style>