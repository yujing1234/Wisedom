<template>
  <div>
      <h1>老师推荐课程</h1>

      <!-- 老师推荐列表 -->
      <ul class="teacherList" v-if="teacherList.length>0">
          <li v-for="(item,index) in teacherList" :key="index" >
              <img :src="item.img" >
              <p>{{item.title}}</p>
              <span v-if="item.free" class="free">免费</span>
              <span v-else class="price"><i class="iconfont">&#xe557;</i>{{item.price}}</span>
          </li>
      </ul>
      <div v-else>数据正在加载中。。。。。。</div>

      <Buy />
  </div>
</template>

<script>
import Buy from "./buy";
export default {
    name:"Correlation",
    components:{
        Buy
    },
    data() {
        return {
            teacherList:[]
        }
    },
    mounted() {
        this.axios.get(this.$api.baseUrl+this.$api.hometeacher)
        .then(data=>{
            console.log(data);
            this.teacherList = data.data.teacherData.teacherList;
        })
    },
};
</script>

<style lang="less" scoped>
h1{
    font-size: 0.38rem;
    font-weight: normal;
    margin: 0.3rem 0 0 0.3rem;
}
.teacherList{
    padding:0 0.3rem;
    margin-bottom: 0.8rem;
    li{
        overflow: hidden;
        padding: 0.3rem 0;
        box-sizing: border-box;
        border-bottom: 1px solid #ccc;
        img{
            float: left;
            margin-right: 0.2rem;
        }
        .free{
            display: inline-block;
            margin-top: 0.3rem;
            color: skyblue;
        }
        .price{
            display: inline-block;
            margin-top: 0.3rem;
            color: red;
            i{
                margin-right: 0.1rem;
            }
        }
        
    }
}
</style>