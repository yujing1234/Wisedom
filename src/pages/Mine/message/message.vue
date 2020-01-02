<template>
    <div>
        <Title :title="title"/>
        <div id="app">
      <!-- 推荐这种写法-->
      <ul class="tab-tilte">
        <li
          v-for="(title,index) in tabTitle"
          @click="cur=index"
          :class="{active:cur==index}"
          :key="index"
        >{{title}}</li>
        <div v-for="(item,index) in arr" v-if="(cur==0)">
            <div>
                <img :src="item.img" alt="" class="touxiang">
                <span class="name" >{{item.name}}</span>
                <span class="content">{{item.title}}</span>
            </div>
        </div>
        <div v-for="(item,index) in arr2" v-if="(cur==1)">
            <div>
                <img :src="item.img" alt="" class="touxiang">
                <span class="name" >{{item.name}}</span>
                <span class="content">{{item.title}}</span>
            </div>
        </div>
        <div v-for="(item,index) in arr3" v-if="(cur==2)">
            <div>
                <img :src="item.img" alt="" class="touxiang">
                <span class="name" >{{item.name}}</span>
                <span class="content">{{item.title}}</span>
            </div>
        </div>
      </ul>
    </div>
    <Nav/>
    </div>
</template>

<script>
import Title from "../../gg/Title"
import Nav from "../../../components/Nav/Nav"
    export default {
        components:{
            Title,
            Nav
        },
        data(){
            return{
                title:'消息中心',
                tabTitle:['课程提醒','互动提醒','平台通知'],
                cur:0,
                num:1,
                arr:[],
                arr2:[],
                arr3:[]
            }
        },
        mounted(){
            this.axios.get(this.$api.baseUrl+this.$api.hometab,{
                params:{
                    id:this.num
                }
            })
            .then(data=>{
                this.arr = data.data.resData[0].tabData
                console.log(this.arr);
            })
            this.axios.get(this.$api.baseUrl+this.$api.hometab,{
                params:{
                    id:this.num
                }
            })
            .then(data=>{
                this.arr2 = data.data.resData[0].tabData
                console.log(this.arr);
            })
            this.axios.get(this.$api.baseUrl+this.$api.hometab,{
                params:{
                    id:this.num
                }
            })
            .then(data=>{
                this.arr3 = data.data.resData[0].tabData
                console.log(this.arr);
            })
        }
    }
</script>

<style scoped>
.content{
    float: left;
    margin-top: -0.8rem;
    margin-left: 1.4rem;
    font-size: 0.2rem;
    color: #808080;
}
.name{
    float:left;
    margin-top: 0.1rem;
    margin-left: 0.1rem;
    font-size: 0.3rem;
    color: orange;
}
.touxiang{
    width: 1.31rem;
    height: 1.31rem;
    border-radius: 50%;
    float: left;
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
</style>