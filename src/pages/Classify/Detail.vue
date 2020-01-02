<template>
  <div style="height:100%">
    <Search bgcolor="blue"  quxiao="取消" />
    <div class="nav">
      <div class="box">
        <p>综合排序
                <img src="../../assets/images/Details/tubiao.jpg" alt />
        </p>
        <p>
                {{detail}}
                 <img src="../../assets/images/Details/tubiao.jpg" alt   class="img1"/>
        </p>

        <p>筛选
                  <img src="../../assets/images/Details/tubiao.jpg" alt />
        </p>
      </div>

      <div class="content">在 "{{detail}}" 的分类下，找到800门课程</div>
             
    </div >
     <div class="box4">
               <div  v-for="(item,index) in  neirongs" :key="index" class="box3">
                       <div class="box5">
                                <img class="tupian"  :src="item.img" alt="" @click="handel"/>
                                <h3 class="ehn">{{item.title}}</h3>
                                <p class="content1  ehn" >{{item.content}}</p> 
                                <span class="im">{{item.money}}</span>
                                <span class="im2">{{item.buy}}</span>
                       </div>
              </div>
     </div>
  </div>
</template>

<script>
import demo from "../../../server/data/classifyData/json";
import Search from "../../components/Serach";

export default {
  components: {
    Search
  },
  data(){
          return{
                  neirongs:[],
                  detail:""

          }
  },
  mounted(it){
        this.neirongs=demo.neirong,
        this.detail=localStorage.getItem("name")
        console.log(name)
  },
  methods:{
          handel(){
                  this.$router.push('/coursedetail')
          }
  }
};
</script>

<style lang="less" scoped>
.nav {
  background-color: rgb(62, 179, 253);
}
 .box{
  height: 0.4rem;
  margin-left: 0.75rem;

  p {
    float: left;
    display: block;
    margin-top: -0.2rem;
    margin-right: 0.4rem;
    color: azure;
  }
}
p img {
  width: 0.3rem;
  height: 0.3rem;
   margin-top: -0.2rem;
   margin-left: 0.05rem
}
.content{
        height: 1rem;
        line-height: 1rem;
        background-color: rgb(238,238,238);
        text-align: center;
        color:rgb(102,102,102);
       
}
.box4 img{
        width: 42%;
        height: 2.2rem;
        margin-left: 0.3rem;
        margin-bottom: 0.25rem;
        margin-top: 0.3rem;
        float: left;
        margin-right: 0.2rem;
}
.box5{
        border-bottom: 1px solid rgb(221,220,220);
        overflow: hidden;
        position: relative;
        padding:0.2rem 0;
        span{
                color:rgb(250,141,51);
                position: absolute;
                bottom:0.4rem;
        }
        .im{
             margin-right: 2rem;   
        }
}
.im2{
            right:0.25rem;     
}
h3{
        width: 50%;
        height: 0.5rem;
        line-height: 0.5rem;
        margin-bottom: 0.1rem;
        margin-top: 0.3rem
}





       

     



</style>