<template>
  <div>
    <Title :title="title"/>
    <!-- tab切换 -->
    <div id="app">
      <!-- 推荐这种写法-->
      <ul class="tab-tilte">
        <li
          v-for="(title,index) in tabTitle"
          @click="cur=index"
          :class="{active:cur==index} "
          :key="index"
          class="li"
        >{{title}}</li>
      </ul>
      <div class="tab-content">
        <div v-if="cur==0" class="list">
          <div v-for="(item,index) in tabMain" :key="index" class="contextBox">
            <img :src="item.img" alt />
            <p class="text-top ehn">{{item.title}}</p>
            <p class="ehn">{{item.title}}</p>
            <p class="text-bottom">上次学习：{{item.name}}</p>
          </div>
        </div>
        <div v-if="cur==1" class="list">
          <div v-for="(item,index) in tabMain1" :key="index" class="contextBox">
            <div>
              <img :src="item.img" alt />
              <p class="text-top ehn">{{item.title}}</p>
              <p class="ehn">{{item.title}}</p>
              <p class="text-bottom">上次学习：{{item.name}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Nav/>
  </div>
</template>

<script scoped>
import Nav from "../.../../../../components/Nav/Nav"
// import Title from "../../gg/Title"
export default {
  components:{
    Nav,
    // Title
    
  },
 mounted(){
      this.axios.get(this.$api.baseUrl+this.$api.hometab,{
        params:{
          id:this.num
        }
      })
      .then(data=>{
         console.log(data.data);
        this.tabMain = data.data.resData[0].tabData
      })
      this.axios.get(this.$api.baseUrl+this.$api.hometab,{
        params:{
          id:this.num+1
        }
      })
      .then(data=>{
        this.tabMain1 = data.data.resData[0].tabData
      })
  },
  data() {
    return {
      title:'我的课程',
      tabTitle: ["课程表", "已完成"],
      tabMain: [],
      tabMain1: [],
      cur: 0 ,//默认选中第一个tab
      num:1,
      tabMain:[],
      tabMain1:[]
    };
  }
};
</script>

    <style scoped>
#app {
  width: 100%;
  margin: 0 auto;
}
ul li {
  margin: 0;
  padding: 0;
  list-style: none;
}

.tab-tilte>li{
  float: left;
  width: 50%;
  padding: 10px 0;
  text-align: center;
  background-color: #f4f4f4;
  cursor: pointer;
}
/* 点击对应的标题添加对应的背景颜色 */
.tab-tilte .active {
  background-color: #09f;
  color: #fff;
}
.tab-content div {
  float: left;
  width: 100%;
  line-height: 100px;
}
.contextBox {
  margin-top: 0.7rem;
  border-bottom: 1px solid #808080;
}
.list img {
  width: 40%;
  height: 2rem;
  margin-left: 0.2rem;
  float: left;
  margin-bottom: 0.5rem;
}
.list p {
  float: left;
  width: 50%;
  height: 0.5rem;
  line-height: 0.5rem;
  margin-left: 0.2rem;
}
.text-top {
  font-weight: 700;
}
.text-bottom {
  margin-top: 0.5rem;
}
</style>