<template>
  <div>
    <Title :title="title" />
    <div id="app">
      <!-- 推荐这种写法-->
      <ul class="tab-tilte">
        <li
          v-for="(title,index) in tabTitle"
          @click="cur=index"
          :class="{active:cur==index}"
          :key="index"
        >{{title}}</li>
      </ul>
    </div>
    <div class="tab-content " >
        <div v-if="cur==0" class="list ">
          <div v-for="(item,index) in tabMain" :key="index" class="contextBox">
            <img :src="item.img" alt />
            <p class="text-top ehn">{{item.title}}</p>
            <p class="ehn">{{item.title}}</p>
            <span class="remove" @click="removeHandle">删除记录</span>
          </div>
        </div>
        <div v-if="cur==1" class="list">
          <div v-for="(item,index) in tabMain1" :key="index" class="contextBox">
            <div>
              <img :src="item.img" alt />
              <p class="text-top ehn">{{item.title}}</p>
              <p class="ehn">{{item.title}}</p>
              <span class="remove" @click="removeHandle">删除记录</span>
            </div>
          </div>
        </div>
        <div v-if="cur==2" class="list">
          <div v-for="(item,index) in tabMain2" :key="index" class="contextBox">
            <div>
              <img :src="item.img" alt />
              <p class="text-top ehn">{{item.title}}</p>
              <p class="ehn">{{item.title}}</p>
              <span class="remove" @click="removeHandle">删除记录</span>
            </div>
          </div>
        </div>
      </div>
    <Nav />
  </div>
</template>

<script>
import Nav from "../../../components/Nav/Nav";
// import Title from "../../gg/Title";
export default {
  components: {
    Nav,
    // Tit
    
  },
  data() {
    return {
      tabTitle: ["全部", "代付款", "已付款"],
      cur: 0,
      num:1,
      title: "订单管理",
      tabMain:[],
      tabMain1:[],
      tabMain2:[]
    };
  },
  methods:{
    removeHandle(e){
      e.path[1].innerHTML=''
      // console.log(e.path);
      
    }
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
      this.axios.get(this.$api.baseUrl+this.$api.hometab,{
        params:{
          id:this.num+2
        }
      })
      .then(data=>{
        this.tabMain2 = data.data.resData[0].tabData
      })
  },
};
</script>

<style scoped>
.remove{
  border: 1.5px solid orange;
  position: absolute;
  left: 5rem;
  top: 1.5rem;
  height: 0.5rem;
    line-height: 0.5rem;
    width: 1.5rem;
    text-align: center;
    font-weight: 700;
  border-bottom: 1px solid #808080;
}
#app {
  width: 100%;
  margin: 0 auto;
}
ul li {
  margin: 0;
  padding: 0;
  list-style: none;
}

.tab-tilte > li {
  float: left;
  width: 33.3%;
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
  position: relative;
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