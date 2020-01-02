<template>
  <div>
    <!-- 导航条 -->
    <Serach bgcolor="white" quxiao="取消" placeholder="搜索我感兴趣的内容"/>
    <!-- 搜索记录 -->
    <div >
      <h3>搜索记录</h3>
      <ul class="logList">
        <li v-for="(item,index) in logList" :key="index">{{item}}</li>
      </ul>
    </div>
     <!-- 热门搜索 -->
    <div>
      <h3>热门搜索</h3>
      <ul class="hotList">
        <li v-for="(item,index) in hotList" :key="index">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Serach from "../../components/Serach"; 
export default {
    name:"HomeSearch",
    components:{
      Serach
    },
    data(){
      return{
        hotList:[],
        logList:[]
      }
    },
    mounted() {
      this.$axios.get(this.$api.baseUrl+this.$api.homesearch)
      .then(data=>{
        console.log(data);
        this.hotList = data.data.serachData.hotList;
        this.logList = data.data.serachData.logList;
      })
    },
};
</script>

<style lang="less" scoped>
.logList,.hotList{
  margin: 0.2rem;
  text-align: center;
  font-size: 0.28rem;
  color: #666;
  overflow: hidden;
  li{
    float: left;
    padding:0.1rem 0.2rem; 
    margin: 0.2rem 0.1rem;
    border: 1px solid #e0e0e0;
    border-radius: 0.35rem;
  }
 
}
h3{
    font-size: 0.32rem;
    font-weight: normal;
    margin-left: 0.3rem;
    margin-top: 0.1rem;
  }
</style>