<template>
  <div>
    <Search bgcolor="blue" quxiao="取消"  />
    <div style="margin-left:0.2rem;margin-top: 0.2rem;">
      <p class="hotTopic">热门话题</p>

      <div class="first">1</div>
      <div @click="first" class="box">{{data.topic1}}</div>
      <hr />
      <div class="second">2</div>
      <div @click="second" class="box">{{data.topic2}}</div>
      <hr />
      <div class="third">3</div>
      <div @click="third" class="box">{{data.topic3}}</div>
 <hr />
      <div class="forth" >4</div>
      <div @click="forth" class="box">{{data.topic4}}</div>
    </div>
  </div>
</template>

<script>
import Search from "../../components/Serach";
import picData from "../../../server/data/communityData/test";
export default {
  components: {
    Search
  },
  data() {
    return {
      data: []
    };
  },
  methods:{
      first(){
          this.$router.push('/community')
      },
      second(){
        this.$router.push('/community')   
      },
      third(){
        this.$router.push('/community')   
      },
      forth(){
        this.$router.push('/community')   
      }
  },
  mounted() {
    this.data = picData.hotSearch;
    console.log(this.data);
  }
};
</script>

<style lang="less" scoped>
.first,
.second,
.third,
.forth {
  width: 0.4rem;
  height: 0.4rem;
  margin-bottom: 0.2rem;
  margin-right: 0.2rem;
  margin-top: 0.2rem;
  color: white;
  display: inline-block;
  text-align: center;
}

.first {
  background-color: red;
}
.second {
  background-color: yellow;
}
.third {
  background-color: orange;
}
.forth {
  background-color: gray;
}
.box {
  display: inline-block;
}
</style>