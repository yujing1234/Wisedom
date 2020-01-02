<template>
  <div>
    <div class="hotHead">
      <img
        @click="()=>{$router.back()}"
        class="return"
        src="../../assets/images/icon/return.png"
        alt
      />
      <p style="color:white;font-size:0.4rem;padding-top:0.2rem">热门榜单</p>
    </div>
    <div v-if="datas.length>0">
      <div v-for="(item, index) in datas[0].hot" :key="index">
        <div class="box" @click="toNext('/hotListDetail?id='+item.id)">
          <img class="headpic" :src="item.leftImg" alt />
          <div class="hotContent">
            <p class="navTitle">{{item.title}}</p>
            <p class="content">{{item.content}}</p>
            <div style="margin-top:0.3rem">
              <p class="commit">{{item.commit}}条评论</p>
              <p class="see">{{item.see}}查看</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import picData from "../../../server/data/communityData/test";
export default {
  name: "HotList",
  data() {
    return {
      datas: [],
      id: ""
    };
  },
  methods: {
    toNext(leftImg) {
      console.log(leftImg);
      this.$router.push(leftImg);
    }
  },
  mounted() {
    // this.datas = picData;
    this.id = this.$route.query.id;
    this.datas = picData.hotList.filter((item, index) => {
      return item.id == this.id;
      console.log(datas);
    });
  },
  watch: {
    id(n) {
      console.log(this.id, n);
    },
    datas(n) {
      console.log(this.datas);
    }
  }
};
</script>

<style lang="less" scoped>
// 头部
.return {
  width: 0.5rem;
  float: left;
  color: white;
  margin-top: 0.2rem;
}
.hotHead {
  text-align: center;
  height: 1rem;
  background-color: rgb(62, 179, 253);
}
//
.box {
  margin-top: 0.15rem;
}
.hotContent {
  display: inline-block;
}
.headpic {
  margin-left: 0.15rem;
  margin-right: 0.3rem;
  display: inline-block;
  width: 2rem;
  height: 2rem;
}
.navTitle {
  font-size: 0.4rem;
}
.commit {
  display: inline-block;
  margin-right: 1rem;
  font-size: 0.25rem;
  color: gray;
}
.see {
  font-size: 0.25rem;
   color: gray;

  display: inline-block;
}

.content {
  font-size: 0.28rem;
  margin-top: 0.3rem;
}
</style>